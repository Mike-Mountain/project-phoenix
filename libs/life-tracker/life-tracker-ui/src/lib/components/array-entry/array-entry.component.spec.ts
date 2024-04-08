import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArrayEntryComponent } from './array-entry.component';

describe('ArrayEntryComponent', () => {
  let component: ArrayEntryComponent;
  let fixture: ComponentFixture<ArrayEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayEntryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrayEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
