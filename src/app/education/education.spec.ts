import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render education title', () => {
    const el: HTMLElement = fixture.nativeElement;
    const title = el.querySelector('#cardTitle');
    expect(title).toBeTruthy();
    expect(title?.textContent).toContain('education');
  });

  it('should render all education items', () => {
    const el: HTMLElement = fixture.nativeElement;
    const items = el.querySelectorAll('.item');
    expect(items.length).toBe(component.items.length);
  });

  it('should render credentials and schools', () => {
    const el: HTMLElement = fixture.nativeElement;
    const titles = el.querySelectorAll('.title');
    expect(titles.length).toBe(component.items.length);
    expect(titles[0]?.textContent).toContain(component.items[0].credential);
    expect(titles[0]?.textContent).toContain(component.items[0].school);
  });

  it('should render date ranges', () => {
    const el: HTMLElement = fixture.nativeElement;
    const dates = el.querySelectorAll('.daterange');
    expect(dates.length).toBe(component.items.length);
    expect(dates[0]?.textContent).toContain(component.items[0].date);
  });
});
