import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length',
  standalone: true,
})
export class LengthPipe implements PipeTransform {
  transform(value: any[] | null): number {
    return value?.length || 0;
  }
}
