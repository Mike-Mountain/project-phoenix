import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeContainerComponent } from './resume-container.component';

describe('ResumeContainerComponent', () => {
  let component: ResumeContainerComponent;
  let fixture: ComponentFixture<ResumeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
