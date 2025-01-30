import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArcheryDataAccessComponent } from './archery-data-access.component';

describe('ArcheryDataAccessComponent', () => {
  let component: ArcheryDataAccessComponent;
  let fixture: ComponentFixture<ArcheryDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcheryDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArcheryDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
