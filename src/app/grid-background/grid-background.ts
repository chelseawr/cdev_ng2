import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';

const CELL = 36;
const LINE = 2;
const PLATE = '#280036'; // grid backdrop
const LINE_COLOR = '#4c4e72';
const FILL_CHANCE = 0.18;
const HOT = '199, 95, 221'; // --accent (#c75fdd), as rgb() channels
const FADE_MS = 800;
const NEIGHBOR = 0.45; // intensity of the 8 surrounding cells vs 1.0 under the cursor
const MAX_DPR = 2;
const RESIZE_DEBOUNCE_MS = 150;
const MAX_STEPS = 64; // cap on interpolation steps for one pointermove
const SEED = 0x9e3779b9;

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

@Component({
  selector: 'app-grid-background',
  standalone: true,
  templateUrl: './grid-background.html',
  styleUrl: './grid-background.scss',
})
export class GridBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private readonly zone = inject(NgZone);

  private ctx: CanvasRenderingContext2D | null = null;
  // offscreen copy of the static grid, blitted each frame instead of re-stroked
  private base: HTMLCanvasElement | null = null;
  private baseCtx: CanvasRenderingContext2D | null = null;

  private width = 0;
  private height = 0;
  private cols = 0;
  private rows = 0;

  private intensity = new Float32Array(0);
  private frameId: number | null = null;
  private lastFrame = 0;

  private lastX = 0;
  private lastY = 0;
  private hasLast = false;

  private resizeTimer: ReturnType<typeof setTimeout> | null = null;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) {
      return;
    }

    this.base = document.createElement('canvas');
    this.baseCtx = this.base.getContext('2d');
    if (!this.baseCtx) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.build();
      this.paint();

      window.addEventListener('resize', this.onResize);

      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

      // reduced motion or a touch device gets the static grid and no listener
      if (!reducedMotion && !coarsePointer) {
        window.addEventListener('pointermove', this.onPointerMove, {
          passive: true,
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
    if (this.resizeTimer !== null) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = null;
    }
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('pointermove', this.onPointerMove);
  }

  // size both canvases to the viewport and redraw the static grid
  private build(): void {
    const canvas = this.canvasRef.nativeElement;
    const base = this.base;
    const bctx = this.baseCtx;
    const ctx = this.ctx;
    if (!base || !bctx || !ctx) {
      return;
    }

    this.width = canvas.clientWidth || window.innerWidth;
    this.height = canvas.clientHeight || window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const pixelWidth = Math.round(this.width * dpr);
    const pixelHeight = Math.round(this.height * dpr);

    canvas.width = pixelWidth;
    canvas.height = pixelHeight;
    base.width = pixelWidth;
    base.height = pixelHeight;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    bctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    this.cols = Math.ceil(this.width / CELL);
    this.rows = Math.ceil(this.height / CELL);
    this.intensity = new Float32Array(this.cols * this.rows);
    this.hasLast = false;

    bctx.fillStyle = PLATE;
    bctx.fillRect(0, 0, this.width, this.height);

    bctx.fillStyle = LINE_COLOR;
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        // seeded per cell coordinate, so the scatter does not shift on resize
        const rand = mulberry32(SEED + Math.imul(c, 73856093) + r);
        if (rand() >= FILL_CHANCE) {
          continue;
        }
        bctx.globalAlpha = rand() * 0.9;
        bctx.fillRect(c * CELL, r * CELL, CELL, CELL);
      }
    }
    bctx.globalAlpha = 1;

    // full-length lines in one path, rather than a rect per cell
    bctx.strokeStyle = LINE_COLOR;
    bctx.lineWidth = LINE;
    bctx.beginPath();
    for (let c = 0; c <= this.cols; c++) {
      const x = c * CELL;
      bctx.moveTo(x, 0);
      bctx.lineTo(x, this.height);
    }
    for (let r = 0; r <= this.rows; r++) {
      const y = r * CELL;
      bctx.moveTo(0, y);
      bctx.lineTo(this.width, y);
    }
    bctx.stroke();
  }

  private paint(): void {
    const ctx = this.ctx;
    const base = this.base;
    if (!ctx || !base) {
      return;
    }

    ctx.drawImage(base, 0, 0, this.width, this.height);

    ctx.lineWidth = LINE;
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const i = this.intensity[r * this.cols + c];
        if (i <= 0) {
          continue;
        }
        const x = c * CELL;
        const y = r * CELL;
        ctx.fillStyle = `rgba(${HOT}, ${i * 0.55})`;
        ctx.fillRect(x, y, CELL, CELL);
        ctx.strokeStyle = `rgba(${HOT}, ${i})`;
        ctx.strokeRect(x, y, CELL, CELL);
      }
    }
  }

  private stamp(px: number, py: number): void {
    const col = Math.floor(px / CELL);
    const row = Math.floor(py / CELL);

    for (let dr = -1; dr <= 1; dr++) {
      const r = row + dr;
      if (r < 0 || r >= this.rows) {
        continue;
      }
      for (let dc = -1; dc <= 1; dc++) {
        const c = col + dc;
        if (c < 0 || c >= this.cols) {
          continue;
        }
        const target = dc === 0 && dr === 0 ? 1 : NEIGHBOR;
        const idx = r * this.cols + c;
        if (this.intensity[idx] < target) {
          this.intensity[idx] = target;
        }
      }
    }
  }

  private onPointerMove = (event: PointerEvent): void => {
    const x = event.clientX;
    const y = event.clientY;

    // interpolate from the last position, or a fast flick leaves a dotted line
    if (this.hasLast) {
      const dx = x - this.lastX;
      const dy = y - this.lastY;
      const steps = Math.min(
        Math.ceil(Math.hypot(dx, dy) / (CELL / 2)),
        MAX_STEPS,
      );
      for (let s = 1; s < steps; s++) {
        this.stamp(
          this.lastX + (dx * s) / steps,
          this.lastY + (dy * s) / steps,
        );
      }
    }
    this.stamp(x, y);

    this.lastX = x;
    this.lastY = y;
    this.hasLast = true;
    this.start();
  };

  private onResize = (): void => {
    if (this.resizeTimer !== null) {
      clearTimeout(this.resizeTimer);
    }
    this.resizeTimer = setTimeout(() => {
      this.resizeTimer = null;
      this.build();
      this.paint();
    }, RESIZE_DEBOUNCE_MS);
  };

  private start(): void {
    if (this.frameId === null) {
      this.lastFrame = 0;
      this.frameId = requestAnimationFrame(this.frame);
    }
  }

  private frame = (now: number): void => {
    const dt = this.lastFrame === 0 ? 16 : now - this.lastFrame;
    this.lastFrame = now;

    const decay = dt / FADE_MS;
    let alive = false;
    for (let i = 0; i < this.intensity.length; i++) {
      const v = this.intensity[i];
      if (v <= 0) {
        continue;
      }
      const next = v - decay;
      if (next > 0) {
        this.intensity[i] = next;
        alive = true;
      } else {
        this.intensity[i] = 0;
      }
    }

    this.paint();

    this.frameId = alive ? requestAnimationFrame(this.frame) : null;
  };
}
