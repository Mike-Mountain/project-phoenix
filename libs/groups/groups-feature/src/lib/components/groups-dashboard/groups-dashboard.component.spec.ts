import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupsDashboardComponent } from './groups-dashboard.component';

describe('GroupsDashboardComponent', () => {
  let component: GroupsDashboardComponent;
  let fixture: ComponentFixture<GroupsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupsDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
