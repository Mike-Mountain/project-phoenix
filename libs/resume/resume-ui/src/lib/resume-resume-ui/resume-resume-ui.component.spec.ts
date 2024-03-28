import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeResumeUiComponent } from './resume-resume-ui.component';

describe('ResumeResumeUiComponent', () => {
  let component: ResumeResumeUiComponent;
  let fixture: ComponentFixture<ResumeResumeUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeResumeUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeResumeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
