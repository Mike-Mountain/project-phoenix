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
import { of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'groups-feature-edit-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatToolbar, MatButton],
  templateUrl: './edit-group.component.html',
  styleUrl: './edit-group.component.scss'
})
export class EditGroupComponent implements OnInit {
  private groupsService = inject(GroupsService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);

  public groupId?: number;
  public group?: Group;

  public groupForm: FormGroup | undefined;
  public user$ = this.authService.getUser();

  ngOnInit() {
    this.activatedRoute.params.pipe(
      switchMap((params) => {
        if (params['id']) {
          this.groupId = params['id'];
          return this.groupsService.getSelectedGroup(this.groupId!).pipe(
            tap(group => this.group = group)
          );
        } else {
          return of({});
        }
      })
    ).subscribe((group: Group | {}) => {
      this.createGroupForm(group as Group);
    });
  }

  public createOrEdit(user: User) {
    if (this.groupForm) {
      if (this.groupId && this.group) {
        const group = {...this.group, ...this.groupForm.value};
        group.members = this.group.members.map(member => member.username);
        this.groupsService.editGroup(this.groupId, group).subscribe(() => {
          this.router.navigateByUrl('').then(() => {
            this.authService.fetchUser(user.username).subscribe();
          });
        })
      } else {
        const group: Group = { ...this.groupForm.value, members: [user.username], createdBy: user.id };
        this.groupsService.createGroup(group).subscribe(() => {
          this.router.navigateByUrl('').then(() => {
            this.authService.fetchUser(user.username).subscribe();
          });
        });
      }
    }
  }

  private createGroupForm(group?: Group) {
    this.groupForm = this.formBuilder.group({
      name: [group?.name || '', Validators.required]
    });
  }
}
