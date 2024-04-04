import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeUtilComponent } from './resume-util.component';

describe('ResumeUtilComponent', () => {
  let component: ResumeUtilComponent;
  let fixture: ComponentFixture<ResumeUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
