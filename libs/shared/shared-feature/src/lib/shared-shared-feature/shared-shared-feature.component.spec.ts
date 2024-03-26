import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedSharedFeatureComponent } from './shared-shared-feature.component';

describe('SharedSharedFeatureComponent', () => {
  let component: SharedSharedFeatureComponent;
  let fixture: ComponentFixture<SharedSharedFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedSharedFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedSharedFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
