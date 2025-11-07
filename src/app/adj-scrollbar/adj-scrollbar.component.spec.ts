import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjScrollbarComponent } from './adj-scrollbar.component';

describe('AdjScrollbarComponent', () => {
  let component: AdjScrollbarComponent;
  let fixture: ComponentFixture<AdjScrollbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjScrollbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
