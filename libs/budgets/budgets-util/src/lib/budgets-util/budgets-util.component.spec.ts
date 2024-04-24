import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetsUtilComponent } from './budgets-util.component';

describe('BudgetsUtilComponent', () => {
  let component: BudgetsUtilComponent;
  let fixture: ComponentFixture<BudgetsUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetsUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetsUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
