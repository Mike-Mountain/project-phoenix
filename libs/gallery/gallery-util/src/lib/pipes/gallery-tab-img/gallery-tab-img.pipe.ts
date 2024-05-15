import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'galleryTabImg',
  standalone: true,
})
export class GalleryTabImgPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
