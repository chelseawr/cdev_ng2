import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjectiveWheel } from './adjective-wheel';

describe('AdjectiveWheelComponent', () => {
  let component: AdjectiveWheel;
  let fixture: ComponentFixture<AdjectiveWheel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjectiveWheel],
    }).compileComponents();

    fixture = TestBed.createComponent(AdjectiveWheel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
