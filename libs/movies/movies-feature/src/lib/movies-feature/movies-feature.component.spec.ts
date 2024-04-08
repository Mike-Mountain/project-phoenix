import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesFeatureComponent } from './movies-feature.component';

describe('MoviesFeatureComponent', () => {
  let component: MoviesFeatureComponent;
  let fixture: ComponentFixture<MoviesFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
