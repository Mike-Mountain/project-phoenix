import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetsDataAccessComponent } from './budgets-data-access.component';

describe('BudgetsDataAccessComponent', () => {
  let component: BudgetsDataAccessComponent;
  let fixture: ComponentFixture<BudgetsDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetsDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetsDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
