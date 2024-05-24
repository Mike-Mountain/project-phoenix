import { inject, Injectable } from '@angular/core';
import { blenderGalleryData } from '../../data/blender-gallery.data';
import { DatabaseService } from '@project-phoenix/shared/shared-data-access';
import { BehaviorSubject, filter, from, map, Observable, of, switchMap } from 'rxjs';
import { GalleryImage } from '../../models/gallery.model';
import { Params } from '@angular/router';
import { gamingGalleryData } from '../../data/gaming-gallery.data';
import { knittingGalleryData } from '../../data/knitting-gallery.data';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private databaseService = inject(DatabaseService);

  private blenderGallery = blenderGalleryData;
  private gamingGallery = gamingGalleryData;
  private knittingGallery = knittingGalleryData;

  private gallerySrc = new BehaviorSubject<GalleryImage[]>([]);

  public selectedGallery = 'blender';

  constructor() {
    this.databaseService.getAll('gallery').then(data => {
      if (data.length === 0) {
        const images = this.blenderGallery.concat(this.gamingGallery).concat(this.knittingGallery);
        images.forEach(item => this.databaseService.post('gallery', item));
      } else {
        this.gallerySrc.next(data);
      }
    });
  }

  public changeGallery(gallery: string) {
    return from(this.databaseService.getAll('gallery')).pipe(
      map((images: GalleryImage[]) => {
        const selectedGallery = images.filter(image => image.tech.includes(gallery));
        this.gallerySrc.next(selectedGallery);
      }),
      switchMap(() => {
        return this.gallerySrc.asObservable();
      })
    );
  }

  public getFeaturedImages(tech: string) {
    return this.gallerySrc.asObservable().pipe(
      map(images => images.filter(image => image.tech.includes(tech))),
      map(images => images.filter(image => image.isFeatured))
    );
  }

  public getGalleryImages(tech: string, category?: string) {
    if (category) {
      return this.gallerySrc.asObservable().pipe(
        map(images => images.filter(image => image.tech.includes(tech))),
        map(images => images.filter(image => image.categories.includes(category)))
      );
    } else {
      return this.gallerySrc.asObservable().pipe(
        map(images => {
          return images.filter(image => image.tech.includes(tech));
        })
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
