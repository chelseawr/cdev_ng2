import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide5 } from './slide5';

describe('Slide5', () => {
  let component: Slide5;
  let fixture: ComponentFixture<Slide5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slide5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slide5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
