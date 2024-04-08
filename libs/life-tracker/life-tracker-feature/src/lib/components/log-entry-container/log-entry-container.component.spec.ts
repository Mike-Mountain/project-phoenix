import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogEntryContainerComponent } from './log-entry-container.component';

describe('LogEntryContainerComponent', () => {
  let component: LogEntryContainerComponent;
  let fixture: ComponentFixture<LogEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogEntryContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogEntryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
