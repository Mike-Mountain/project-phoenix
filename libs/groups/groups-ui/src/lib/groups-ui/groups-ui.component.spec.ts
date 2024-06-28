import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupsUiComponent } from './groups-ui.component';

describe('GroupsUiComponent', () => {
  let component: GroupsUiComponent;
  let fixture: ComponentFixture<GroupsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
