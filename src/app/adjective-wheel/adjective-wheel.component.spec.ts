import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjectiveWheelComponent } from './adjective-wheel.component';

describe('AdjectiveWheelComponent', () => {
  let component: AdjectiveWheelComponent;
  let fixture: ComponentFixture<AdjectiveWheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjectiveWheelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjectiveWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
