import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'as',
  standalone: true
})
export class AsPipe implements PipeTransform {

  transform(value: any, model: any): any {
    return value as typeof model;
  }

}
