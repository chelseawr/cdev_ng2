import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { bootstrapApplication } from '@angular/platform-browser';
import { Slide1 } from './slide1/slide1';
import { Slide2 } from './slide2/slide2';
import { Slide3 } from './slide3/slide3';
import { Slide4 } from './slide4/slide4';
import { Slide5 } from './slide5/slide5';
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  Directive,
} from '@angular/core';
import { ResponsiveService } from './responsive.service';
import { Slide6 } from './slide6/slide6';
import { ScrollService } from './services/scroll.service';

@Directive({
  selector: '[scrollSpySection]',
  standalone: true,
})
export class ScrollSpySectionDirective implements AfterViewInit, OnDestroy {
  @Input('scrollSpySection') id!: string;
  @Output() inView = new EventEmitter<string>();

  private intersectionObserver?: IntersectionObserver;
  constructor(
    private el: ElementRef<HTMLElement>,
    private zone: NgZone,
  ) {}

  // which one to highlight
  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.target === this.el.nativeElement && e.isIntersecting) {
              this.zone.run(() => {
                this.inView.emit(this.id);
              });
            }
          }
        },
        { threshold: 0.6 },
      );

      this.intersectionObserver.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [
    FontAwesomeModule,
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    ScrollSpySectionDirective,
  ],
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('topSentinel', { read: ElementRef })
  topSentinel!: ElementRef<HTMLElement>;

  activeId: string | null = null;
  navVisible = false;
  private visibilityObserver?: IntersectionObserver;
  constructor(
    private zone: NgZone,
    public responsive: ResponsiveService,
    public scroll: ScrollService,
  ) {}

  // show/hide nav itself
  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.visibilityObserver = new IntersectionObserver((entries) => {
        const sentinelVisible = entries[0]?.isIntersecting ?? true;
        // reenter Angular so the template updates
        this.zone.run(() => (this.navVisible = !sentinelVisible));
      });

      this.visibilityObserver.observe(this.topSentinel.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.visibilityObserver?.disconnect();
  }

  onSectionInView(id: string) {
    if (this.activeId !== id) {
      this.activeId = id;
      history.replaceState(null, '', `#${id}`);
    }
  }

  scrollTo(id: string): void {
    this.scroll.scrollTo(id);
  }
}

bootstrapApplication(App);
