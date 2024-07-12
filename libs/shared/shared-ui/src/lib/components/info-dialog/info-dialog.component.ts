import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'shared-ui-info-dialog',
  standalone: true,
  imports: [CommonModule,MatButton, MatDialogClose],
  templateUrl: './info-dialog.component.html',
  styleUrl: './info-dialog.component.scss',
})
export class InfoDialogComponent {
  private dialogRef = inject(MatDialogRef);
  public data = inject(MAT_DIALOG_DATA);

  constructor() {
    this.dialogRef.updateSize('90%');
  }
}
