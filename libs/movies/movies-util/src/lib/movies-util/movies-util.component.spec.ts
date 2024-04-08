import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesUtilComponent } from './movies-util.component';

describe('MoviesUtilComponent', () => {
  let component: MoviesUtilComponent;
  let fixture: ComponentFixture<MoviesUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
