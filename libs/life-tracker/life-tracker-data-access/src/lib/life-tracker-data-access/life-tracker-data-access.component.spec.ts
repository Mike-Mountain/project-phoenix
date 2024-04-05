import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifeTrackerDataAccessComponent } from './life-tracker-data-access.component';

describe('LifeTrackerDataAccessComponent', () => {
  let component: LifeTrackerDataAccessComponent;
  let fixture: ComponentFixture<LifeTrackerDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeTrackerDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeTrackerDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
