import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditBudgetItemComponent } from './add-edit-budget-item.component';

describe('AddEditBudgetItemComponent', () => {
  let component: AddEditBudgetItemComponent;
  let fixture: ComponentFixture<AddEditBudgetItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditBudgetItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditBudgetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
