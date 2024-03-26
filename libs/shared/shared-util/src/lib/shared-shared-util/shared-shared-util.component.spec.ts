import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedSharedUtilComponent } from './shared-shared-util.component';

describe('SharedSharedUtilComponent', () => {
  let component: SharedSharedUtilComponent;
  let fixture: ComponentFixture<SharedSharedUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedSharedUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedSharedUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
