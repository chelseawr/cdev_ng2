import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBackgroundComponent } from './grid-background';

describe('GridBackgroundComponent', () => {
  let component: GridBackgroundComponent;
  let fixture: ComponentFixture<GridBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridBackgroundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GridBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
