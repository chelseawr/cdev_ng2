import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide6 } from './slide6';

describe('Slide6', () => {
  let component: Slide6;
  let fixture: ComponentFixture<Slide6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slide6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slide6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
