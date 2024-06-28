import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupsDataAccessComponent } from './groups-data-access.component';

describe('GroupsDataAccessComponent', () => {
  let component: GroupsDataAccessComponent;
  let fixture: ComponentFixture<GroupsDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupsDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupsDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
