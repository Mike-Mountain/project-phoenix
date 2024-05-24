import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  blenderCategories,
  GalleryImage,
  GalleryService,
  gamingCategories, knittingCategories
} from '@project-phoenix/gallery-data-access';
import { MatChip } from '@angular/material/chips';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { ImageComponent, ThemeService } from '@project-phoenix/shared/shared-ui';
import { RouterLink } from '@angular/router';
import { Theme } from '@project-phoenix/shared/shared-data-access';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'gallery-feature-dashboard',
  standalone: true,
  imports: [CommonModule, MatChip, MatTabGroup, MatTab, NgOptimizedImage, ImageComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private galleryService = inject(GalleryService);
  private themeService = inject(ThemeService);

  public gallery$: Observable<GalleryImage[]> = of([]);
  public featuredGallery$: Observable<GalleryImage[]> = of([]);
  public categories = blenderCategories;
  public selectedCategory = 'All Images';
  public selectedGallery = this.galleryService.selectedGallery;

  ngOnInit(): void {
    this.themeService.updateTheme(Theme.DEFAULT);
    this.gallery$ = this.galleryService.getGalleryImages(this.selectedGallery);
    this.featuredGallery$ = this.galleryService.getFeaturedImages(this.selectedGallery);
  }

  public setSelectedCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All Images') {
      this.gallery$ = this.galleryService.getGalleryImages(this.selectedGallery);
    } else {
      this.gallery$ = this.galleryService.getGalleryImages(this.selectedGallery, category);
    }
  }

  public setActiveGallery(gallery: string) {
    this.selectedGallery = gallery;
    this.galleryService.selectedGallery = gallery;
    this.selectedCategory = 'All Images';
    this.gallery$ = this.galleryService.changeGallery(this.selectedGallery);
    this.featuredGallery$ = this.galleryService.getFeaturedImages(this.selectedGallery);
    if (gallery === 'blender') {
      this.categories = blenderCategories;
    } else if (gallery === 'gaming') {
      this.categories = gamingCategories;

    }else if (gallery === 'knitting') {
      this.categories = knittingCategories;

    }
  }
}
