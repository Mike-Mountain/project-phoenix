import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListItemDialogComponent } from './list-item-dialog.component';

describe('ListItemDialogComponent', () => {
  let component: ListItemDialogComponent;
  let fixture: ComponentFixture<ListItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListItemDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
