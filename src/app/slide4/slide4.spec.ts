import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide4 } from './slide4';

describe('Slide4', () => {
  let component: Slide4;
  let fixture: ComponentFixture<Slide4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slide4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slide4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
