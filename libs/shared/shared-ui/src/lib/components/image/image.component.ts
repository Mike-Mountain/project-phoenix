import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-ui-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  @Input() assetPath: string = '';
  @Input() imagePath: string = '';
  @Input() imageClass?: string;
}
