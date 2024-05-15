import { Component, inject, TemplateRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { GalleryImage, GalleryImagePath, GalleryService } from '@project-phoenix/gallery-data-access';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { MatChip } from '@angular/material/chips';
import { ImageComponent } from '@project-phoenix/shared/shared-ui';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'gallery-feature-details',
  standalone: true,
  imports: [CommonModule, MatChip, ImageComponent, MatButton, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  private galleryService = inject(GalleryService);
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private dialog = inject(MatDialog);

  public imageDetails$: Observable<GalleryImage> = this.galleryService.getSelectedImage(this.route.params);
  public selectedImage = '';

  openSelectedImage(selectedImage: string, template: TemplateRef<any>) {
    this.selectedImage = selectedImage;
    this.dialog.open(template)
  }

  goBack() {
    this.location.back();
  }
}
