import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeResumeUtilComponent } from './resume-resume-util.component';

describe('ResumeResumeUtilComponent', () => {
  let component: ResumeResumeUtilComponent;
  let fixture: ComponentFixture<ResumeResumeUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeResumeUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeResumeUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
