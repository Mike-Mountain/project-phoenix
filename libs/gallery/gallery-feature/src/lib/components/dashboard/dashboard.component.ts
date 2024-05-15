import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { blenderCategories, GalleryService, gamingCategories } from '@project-phoenix/gallery-data-access';
import { MatChip } from '@angular/material/chips';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { ImageComponent } from '@project-phoenix/shared/shared-ui';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'gallery-feature-dashboard',
  standalone: true,
  imports: [CommonModule, MatChip, MatTabGroup, MatTab, NgOptimizedImage, ImageComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private galleryService = inject(GalleryService);

  public gallery$ = this.galleryService.getGallery('blender');
  public featuredGallery$ = this.galleryService.getFeaturedImages('blender');
  public categories = blenderCategories;
  public selectedCategory = 'All Images';

  public selectedGallery = 'blender';

  public setSelectedCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All Images') {
      this.gallery$ = this.galleryService.getGallery(this.selectedGallery);
    } else {
      this.gallery$ = this.galleryService.getGallery(this.selectedGallery, category);
    }
  }

  public setActiveGallery(gallery: string) {
    this.selectedGallery = gallery;
    this.selectedCategory = 'All Images';
    this.gallery$ = this.galleryService.getGallery(this.selectedGallery);
    this.featuredGallery$ = this.galleryService.getFeaturedImages(this.selectedGallery);
    if (gallery === 'blender') {
      this.categories = blenderCategories;
    } else if (gallery === 'gaming') {
      this.categories = gamingCategories;

    }
  }
}
