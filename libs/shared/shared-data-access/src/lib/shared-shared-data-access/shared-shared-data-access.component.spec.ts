import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedSharedDataAccessComponent } from './shared-shared-data-access.component';

describe('SharedSharedDataAccessComponent', () => {
  let component: SharedSharedDataAccessComponent;
  let fixture: ComponentFixture<SharedSharedDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedSharedDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedSharedDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
