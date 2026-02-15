import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './home/home';
import { IntroComponent } from './intro/intro';
import { ExperienceComponent } from './experience/experience';
import { SkillsComponent } from './skills/skills';
import { EducationComponent } from './education/education';
import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  Directive,
  inject,
  input,
  output,
} from '@angular/core';
import { ResponsiveService } from './responsive.service';
import { ProjectsComponent } from './projects/projects';
import { ScrollService } from './services/scroll.service';

@Directive({
  selector: '[appScrollSpySection]',
  standalone: true,
})
export class ScrollSpySectionDirective implements AfterViewInit, OnDestroy {
  readonly id = input.required<string>({ alias: 'appScrollSpySection' });
  readonly inView = output<string>();

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly zone = inject(NgZone);
  private intersectionObserver?: IntersectionObserver;

  // which one to highlight
  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.target === this.el.nativeElement && e.isIntersecting) {
              this.zone.run(() => {
                this.inView.emit(this.id());
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
    HomeComponent,
    IntroComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    ScrollSpySectionDirective,
  ],
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('topSentinel', { read: ElementRef })
  topSentinel!: ElementRef<HTMLElement>;

  activeId: string | null = null;
  navVisible = false;
  private readonly zone = inject(NgZone);
  readonly responsive = inject(ResponsiveService);
  readonly scroll = inject(ScrollService);
  private visibilityObserver?: IntersectionObserver;

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
      history.replaceState(null, '', `/${id}`);
    }
  }

  scrollTo(id: string): void {
    this.scroll.scrollTo(id);
  }
}

bootstrapApplication(App);
