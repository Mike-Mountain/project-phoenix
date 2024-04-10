import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '@project-phoenix/shared/shared-data-access';

@Pipe({
  name: 'breakTitle',
  standalone: true,
})
export class BreakTitlePipe implements PipeTransform {
  transform(title: string): Title | undefined {
    return title?.includes(':') ?
      new Title ({
        title: title.split(':')[0],
        subtitle: title.split(':')[1]
      }) : undefined;
  }
}
