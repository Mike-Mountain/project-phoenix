import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsPipe } from '@project-phoenix/shared/shared-util';
import { MatAutocomplete, MatAutocompleteTrigger, MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { AuthService, User } from '@project-phoenix/shared/shared-data-access';
import { debounce, interval, of, switchMap } from 'rxjs';
import { GroupsService } from '@project-phoenix/groups-data-access';

@Component({
  selector: 'groups-ui-member-dialog',
  standalone: true,
  imports: [CommonModule, AsPipe, MatAutocomplete, MatAutocompleteTrigger, MatButton, MatFormField, MatInput, MatLabel, MatOption, ReactiveFormsModule, MatDialogClose],
  templateUrl: './member-dialog.component.html',
  styleUrl: './member-dialog.component.scss'
})
export class MemberDialogComponent {
  private groupsService = inject(GroupsService);
  private dialogRef = inject(MatDialogRef);
  public data = inject(MAT_DIALOG_DATA);

  public usernameControl = new FormControl('');
  public selectedMembers: string[] = [];

  constructor() {
    this.dialogRef.updateSize('90%');
  }

  saveMembers() {
    if (this.usernameControl.value) {
      // TODO: Add batch member add
      this.groupsService.addGroupMembers([this.usernameControl.value], this.data.groupId);
    }
  }
}
