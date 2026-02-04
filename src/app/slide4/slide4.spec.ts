import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide4 } from './slide4';

describe('Slide4', () => {
  let component: Slide4;
  let fixture: ComponentFixture<Slide4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slide4],
    }).compileComponents();

    fixture = TestBed.createComponent(Slide4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section with skills id', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('#skills')).toBeTruthy();
  });

  it('should render skills title', () => {
    const el: HTMLElement = fixture.nativeElement;
    const title = el.querySelector('#cardTitle');
    expect(title).toBeTruthy();
    expect(title?.textContent).toContain('skills');
  });

  it('should render all skill categories', () => {
    const el: HTMLElement = fixture.nativeElement;
    const details = el.querySelectorAll('details.item');
    expect(details.length).toBe(component.skills.length);
  });

  it('should render skill type titles', () => {
    const el: HTMLElement = fixture.nativeElement;
    const titles = el.querySelectorAll('.title');
    expect(titles.length).toBe(component.skills.length);
    expect(titles[0]?.textContent).toContain('frontend');
  });

  it('should render chevron icons for each skill', () => {
    const el: HTMLElement = fixture.nativeElement;
    const chevrons = el.querySelectorAll('.chevron');
    expect(chevrons.length).toBe(component.skills.length);
  });

  it('should render skill category icons', () => {
    const el: HTMLElement = fixture.nativeElement;
    const headings = el.querySelectorAll('.heading fa-icon');
    expect(headings.length).toBe(component.skills.length);
  });

  it('should have all details closed by default', () => {
    expect(component.openType).toBeNull();
  });
});
