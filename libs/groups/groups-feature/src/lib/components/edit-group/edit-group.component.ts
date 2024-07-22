import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Group, GroupsService } from '@project-phoenix/groups-data-access';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { AuthService, User } from '@project-phoenix/shared/shared-data-access';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'groups-feature-edit-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatToolbar, MatButton],
  templateUrl: './edit-group.component.html',
  styleUrl: './edit-group.component.scss'
})
export class EditGroupComponent {
  private groupsService = inject(GroupsService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);

  public groupId = 0;
  public group$ = this.groupsService.getSelectedGroup()
    .pipe(tap(group => {
      this.groupId = group.id;
      this.createGroupForm(group);
    }));

  public groupForm: FormGroup | undefined;
  public user$ = this.authService.getUser();

  public createOrEdit(user: User, group: Group) {
    if (this.groupForm) {
      if (this.groupId && group) {
        const tmpGroup = { ...group, ...this.groupForm.value };
        tmpGroup.members = group.members.map(member => member.username);
        this.groupsService.editGroup(this.groupId, tmpGroup, user.username);
      } else {
        const group: Group = { ...this.groupForm.value, members: [user.username], createdBy: user.username };
        this.groupsService.createGroup(group, user.username);
      }
      this.router.navigateByUrl('');
    }
  }

  private createGroupForm(group?: Group) {
    this.groupForm = this.formBuilder.group({
      name: [group?.name || '', Validators.required]
    });
  }
}
