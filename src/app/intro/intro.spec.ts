import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroComponent } from './intro';

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section with intro id', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('#intro')).toBeTruthy();
  });

  it('should render introduction title', () => {
    const el: HTMLElement = fixture.nativeElement;
    const title = el.querySelector('#cardTitle');
    expect(title).toBeTruthy();
    expect(title?.textContent).toContain('introduction');
  });

  it('should render introduction text', () => {
    const el: HTMLElement = fixture.nativeElement;
    const text = el.querySelector('#text');
    expect(text).toBeTruthy();
    expect(text?.textContent).toContain('software engineer');
  });

  it('should render photo', () => {
    const el: HTMLElement = fixture.nativeElement;
    const img = el.querySelector('#picBox img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toContain('.jpg');
  });

  it('should render photo caption', () => {
    const el: HTMLElement = fixture.nativeElement;
    const caption = el.querySelector('#picBox p');
    expect(caption).toBeTruthy();
    expect(caption?.textContent).toContain('Habitat for Humanity');
  });
});
