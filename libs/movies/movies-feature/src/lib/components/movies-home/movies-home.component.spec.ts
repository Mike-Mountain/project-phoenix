import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesHomeComponent } from './movies-home.component';

describe('MoviesHomeComponent', () => {
  let component: MoviesHomeComponent;
  let fixture: ComponentFixture<MoviesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
