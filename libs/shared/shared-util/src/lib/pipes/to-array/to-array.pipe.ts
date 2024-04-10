import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray',
  standalone: true,
})
export class ToArrayPipe implements PipeTransform {
  transform(value: string): string[] {
    return value?.split(',').map(item => item.trim());
  }
}
