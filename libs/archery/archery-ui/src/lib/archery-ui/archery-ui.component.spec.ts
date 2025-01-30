import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArcheryUiComponent } from './archery-ui.component';

describe('ArcheryUiComponent', () => {
  let component: ArcheryUiComponent;
  let fixture: ComponentFixture<ArcheryUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcheryUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArcheryUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
