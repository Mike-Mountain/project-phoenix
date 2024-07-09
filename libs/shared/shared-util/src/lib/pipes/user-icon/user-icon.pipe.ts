import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userIcon',
  standalone: true,
})
export class UserIconPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(0, 1);
  }
}
