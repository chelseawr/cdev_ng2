import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section with projects id', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('#projects')).toBeTruthy();
  });

  it('should render projects title', () => {
    const el: HTMLElement = fixture.nativeElement;
    const title = el.querySelector('#cardTitle');
    expect(title).toBeTruthy();
    expect(title?.textContent).toContain('projects');
  });

  it('should render all projects', () => {
    const el: HTMLElement = fixture.nativeElement;
    const details = el.querySelectorAll('details.item');
    expect(details.length).toBe(component.projects.length);
  });

  it('should render project titles', () => {
    const el: HTMLElement = fixture.nativeElement;
    const titles = el.querySelectorAll('.title');
    expect(titles.length).toBe(component.projects.length);
    expect(titles[0]?.textContent).toContain(component.projects[0].title);
  });

  it('should render project thumbnails', () => {
    const el: HTMLElement = fixture.nativeElement;
    const thumbs = el.querySelectorAll('.thumb');
    expect(thumbs.length).toBe(component.projects.length);
  });

  it('should render chevron icons', () => {
    const el: HTMLElement = fixture.nativeElement;
    const chevrons = el.querySelectorAll('.chevron');
    expect(chevrons.length).toBe(component.projects.length);
  });

  it('should have all details closed by default', () => {
    expect(component.openId).toBeNull();
  });
});
