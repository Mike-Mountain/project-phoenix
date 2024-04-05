import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifeTrackerUtilComponent } from './life-tracker-util.component';

describe('LifeTrackerUtilComponent', () => {
  let component: LifeTrackerUtilComponent;
  let fixture: ComponentFixture<LifeTrackerUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeTrackerUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeTrackerUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
