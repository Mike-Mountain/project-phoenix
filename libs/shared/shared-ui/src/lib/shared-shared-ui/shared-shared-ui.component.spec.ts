import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedSharedUiComponent } from './shared-shared-ui.component';

describe('SharedSharedUiComponent', () => {
  let component: SharedSharedUiComponent;
  let fixture: ComponentFixture<SharedSharedUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedSharedUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedSharedUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
