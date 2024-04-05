import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifeTrackerFeatureComponent } from './life-tracker-feature.component';

describe('LifeTrackerFeatureComponent', () => {
  let component: LifeTrackerFeatureComponent;
  let fixture: ComponentFixture<LifeTrackerFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeTrackerFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeTrackerFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
