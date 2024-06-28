import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupsUtilComponent } from './groups-util.component';

describe('GroupsUtilComponent', () => {
  let component: GroupsUtilComponent;
  let fixture: ComponentFixture<GroupsUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupsUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupsUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
