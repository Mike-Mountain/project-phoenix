import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split',
  standalone: true,
})
export class SplitPipe implements PipeTransform {
  transform(value: string, sliceOn: string): string {
    return value.split(sliceOn)[0]
  }
}
