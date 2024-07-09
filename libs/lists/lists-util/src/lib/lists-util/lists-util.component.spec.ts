import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListsUtilComponent } from './lists-util.component';

describe('ListsUtilComponent', () => {
  let component: ListsUtilComponent;
  let fixture: ComponentFixture<ListsUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListsUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListsUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
