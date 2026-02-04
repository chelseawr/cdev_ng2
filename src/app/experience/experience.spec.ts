import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience';
import { ROLES } from './roles.data';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section with experience id', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('#experience')).toBeTruthy();
  });

  it('should render experience title', () => {
    const el: HTMLElement = fixture.nativeElement;
    const title = el.querySelector('#cardTitle');
    expect(title).toBeTruthy();
    expect(title?.textContent).toContain('experience');
  });

  it('should render all roles', () => {
    const el: HTMLElement = fixture.nativeElement;
    const details = el.querySelectorAll('details.item');
    expect(details.length).toBe(ROLES.length);
  });

  it('should render role titles and companies', () => {
    const el: HTMLElement = fixture.nativeElement;
    const titles = el.querySelectorAll('.title');
    expect(titles.length).toBe(ROLES.length);
    expect(titles[0]?.textContent).toContain(ROLES[0].title);
    expect(titles[0]?.textContent).toContain(ROLES[0].company);
  });

  it('should render date ranges', () => {
    const el: HTMLElement = fixture.nativeElement;
    const dates = el.querySelectorAll('.daterange');
    expect(dates.length).toBe(ROLES.length);
    expect(dates[0]?.textContent).toContain(ROLES[0].dates);
  });

  it('should render chevron icons', () => {
    const el: HTMLElement = fixture.nativeElement;
    const chevrons = el.querySelectorAll('.chevron');
    expect(chevrons.length).toBe(ROLES.length);
  });

  it('should have all details closed by default', () => {
    expect(component.openId).toBeNull();
  });
});
