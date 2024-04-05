import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifeTrackerUiComponent } from './life-tracker-ui.component';

describe('LifeTrackerUiComponent', () => {
  let component: LifeTrackerUiComponent;
  let fixture: ComponentFixture<LifeTrackerUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeTrackerUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeTrackerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
