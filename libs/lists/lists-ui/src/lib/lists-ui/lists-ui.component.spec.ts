import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListsUiComponent } from './lists-ui.component';

describe('ListsUiComponent', () => {
  let component: ListsUiComponent;
  let fixture: ComponentFixture<ListsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
