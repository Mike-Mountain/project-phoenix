import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesDataAccessComponent } from './movies-data-access.component';

describe('MoviesDataAccessComponent', () => {
  let component: MoviesDataAccessComponent;
  let fixture: ComponentFixture<MoviesDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
