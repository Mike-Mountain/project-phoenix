import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryUiComponent } from './gallery-ui.component';

describe('GalleryUiComponent', () => {
  let component: GalleryUiComponent;
  let fixture: ComponentFixture<GalleryUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
