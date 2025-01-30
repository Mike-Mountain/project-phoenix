import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArcheryUtilComponent } from './archery-util.component';

describe('ArcheryUtilComponent', () => {
  let component: ArcheryUtilComponent;
  let fixture: ComponentFixture<ArcheryUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcheryUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArcheryUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
