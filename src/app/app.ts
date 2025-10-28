import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { bootstrapApplication } from '@angular/platform-browser';
import { Slide1 } from './slide1/slide1';
import { Slide2 } from './slide2/slide2';
import { Slide3 } from './slide3/slide3';
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  ViewChildren,
  QueryList,
  signal,
  Input,
  Output,
  EventEmitter,
  Directive,
} from '@angular/core';
import { Slide4 } from './slide4/slide4';

@Directive({
  selector: '[scrollSpySection]',
  standalone: true,
})
export class ScrollSpySectionDirective implements AfterViewInit, OnDestroy {
  @Input('scrollSpySection') id!: string;
  @Output() inView = new EventEmitter<string>();

  private intersectionObserver?: IntersectionObserver;
  constructor(private el: ElementRef<HTMLElement>, private zone: NgZone) {}

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
        { threshold: 0.6 }
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
    ScrollSpySectionDirective,
  ],
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('topSentinel', { read: ElementRef })
  topSentinel!: ElementRef<HTMLElement>;

  activeId: string | null = null;
  navVisible = false;
  private visibilityObserver?: IntersectionObserver;

  constructor(private zone: NgZone) {}

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

  // update page anchor onscroll
  ngDoCheck(): void {
    // console.log('this active id', this.activeId);
    if (this.activeId) {
      const currentHash = window.location.hash.replace('#', '');
      if (currentHash !== this.activeId) {
        history.replaceState(null, '', `#${this.activeId}`);
      }
    }
  }
}
bootstrapApplication(App);
