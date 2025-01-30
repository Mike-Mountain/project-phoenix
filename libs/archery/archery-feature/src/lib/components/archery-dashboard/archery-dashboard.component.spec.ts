import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArcheryDashboardComponent } from './archery-dashboard.component';

describe('ArcheryDashboardComponent', () => {
  let component: ArcheryDashboardComponent;
  let fixture: ComponentFixture<ArcheryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcheryDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArcheryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
