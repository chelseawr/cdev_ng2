import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { bootstrapApplication } from '@angular/platform-browser';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component';
import { Slide3Component } from './slide3/slide3.component';
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
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    FontAwesomeModule,
    Slide1Component,
    Slide2Component,
    Slide3Component,
    ScrollSpySectionDirective,
  ],
})
export class AppComponent implements AfterViewInit, OnDestroy {
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
        this.zone.run(() => (this.navVisible = sentinelVisible ? false : true));
      });

      this.visibilityObserver.observe(this.topSentinel.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.visibilityObserver?.disconnect();
  }
}
bootstrapApplication(AppComponent);
