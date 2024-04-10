import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'defaultImage',
  standalone: true
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string): string {
    if (value === 'N/A' || !value) {
      return 'assets/images/default-movie.png';
    }
    return value;
  }

}
