import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerContainerUiComponent } from './container-container-ui.component';

describe('ContainerContainerUiComponent', () => {
  let component: ContainerContainerUiComponent;
  let fixture: ComponentFixture<ContainerContainerUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerContainerUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerContainerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
