import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetsFeatureComponent } from './budgets-feature.component';

describe('BudgetsFeatureComponent', () => {
  let component: BudgetsFeatureComponent;
  let fixture: ComponentFixture<BudgetsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetsFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
