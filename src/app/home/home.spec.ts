import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section with home id', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('#home')).toBeTruthy();
  });

  it('should render name heading', () => {
    const el: HTMLElement = fixture.nativeElement;
    const name = el.querySelector('.name');
    expect(name).toBeTruthy();
    expect(name?.textContent).toContain('Chelsea May');
  });

  it('should render subtitle', () => {
    const el: HTMLElement = fixture.nativeElement;
    const subtitle = el.querySelector('.subtitle');
    expect(subtitle).toBeTruthy();
    expect(subtitle?.textContent).toContain('software engineer');
  });

  it('should render CTA navigation with 4 buttons', () => {
    const el: HTMLElement = fixture.nativeElement;
    const buttons = el.querySelectorAll('.cta .btn');
    expect(buttons.length).toBe(4);
  });

  it('should render Email Me link', () => {
    const el: HTMLElement = fixture.nativeElement;
    const emailBtn = el.querySelector('a[aria-label="Send Chelsea an email"]');
    expect(emailBtn).toBeTruthy();
    expect(emailBtn?.getAttribute('href')).toContain('mailto:');
  });

  it('should render GitHub link', () => {
    const el: HTMLElement = fixture.nativeElement;
    const githubBtn = el.querySelector('a[aria-label="Open GitHub profile"]');
    expect(githubBtn).toBeTruthy();
    expect(githubBtn?.getAttribute('href')).toContain('github.com');
  });

  it('should render LinkedIn link', () => {
    const el: HTMLElement = fixture.nativeElement;
    const linkedinBtn = el.querySelector(
      'a[aria-label="Open LinkedIn profile"]',
    );
    expect(linkedinBtn).toBeTruthy();
    expect(linkedinBtn?.getAttribute('href')).toContain('linkedin.com');
  });

  it('should render Resume link', () => {
    const el: HTMLElement = fixture.nativeElement;
    const resumeBtn = el.querySelector('a[aria-label="View Resume"]');
    expect(resumeBtn).toBeTruthy();
    expect(resumeBtn?.getAttribute('href')).toContain('.pdf');
  });

  it('should render scroll arrow', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('#arrow')).toBeTruthy();
  });
});
