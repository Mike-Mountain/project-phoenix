import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetsUiComponent } from './budgets-ui.component';

describe('BudgetsUiComponent', () => {
  let component: BudgetsUiComponent;
  let fixture: ComponentFixture<BudgetsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
