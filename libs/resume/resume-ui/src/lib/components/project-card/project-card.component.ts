import { Component, inject, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChip } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { SideProject } from '@project-mike/resume/resume-data-access';

@Component({
  selector: 'resume-ui-project-card',
  standalone: true,
  imports: [CommonModule, MatChip],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project: SideProject | undefined;
  selectedImage: string | undefined;

  private dialog = inject(MatDialog);

  public openImageModal(imagePath: string, modal: TemplateRef<any>) {
    this.selectedImage = imagePath;
    this.dialog.open(modal).afterClosed().pipe(take(1)).subscribe(() => this.selectedImage = '');
  }
}
