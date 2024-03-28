import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeResumeDataAccessComponent } from './resume-resume-data-access.component';

describe('ResumeResumeDataAccessComponent', () => {
  let component: ResumeResumeDataAccessComponent;
  let fixture: ComponentFixture<ResumeResumeDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeResumeDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeResumeDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
