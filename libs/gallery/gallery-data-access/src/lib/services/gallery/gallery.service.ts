import { inject, Injectable } from '@angular/core';
import { featuredGallery } from '../../data/gallery-images.data';
import { DatabaseService } from '@project-phoenix/shared/shared-data-access';
import { BehaviorSubject, filter, from, map, Observable, switchMap } from 'rxjs';
import { GalleryImage } from '../../models/gallery.model';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private databaseService = inject(DatabaseService);

  private localGallery = featuredGallery;
  private gallerySrc = new BehaviorSubject<GalleryImage[]>([]);
  public gallery$ = this.gallerySrc.asObservable();

  constructor() {
    this.databaseService.getAll('gallery').then(data => {
      if (data.length === 0) {
        this.gallerySrc.next(this.localGallery);
        this.localGallery.forEach(item => this.databaseService.post('gallery', item));
      } else {
        this.gallerySrc.next(data);
      }
    });
  }

  public getFeaturedImages(tech: string) {
    return this.gallerySrc.asObservable().pipe(
      map(images => images.filter(image => image.tech.includes(tech))),
      map(images => images.filter(image => image.isFeatured))
    );
  }

  public getGallery(tech: string, category?: string) {
    if (category) {
      return this.gallerySrc.asObservable().pipe(
        map(images => images.filter(image => image.tech.includes(tech))),
        map(images => images.filter(image => image.categories.includes(category)))
      );
    } else {
      return this.gallerySrc.asObservable().pipe(
        map(images => images.filter(image => image.tech.includes(tech)))
      );
    }
  }

  public getSelectedImage(params: Observable<Params>) {
    return params.pipe(
      switchMap(params => {
        return from(this.databaseService.getOne('gallery', Number(params['id'])));
      }));
  }
}
