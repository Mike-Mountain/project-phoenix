import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthDialogOptions, AuthService } from '@project-phoenix/shared/shared-data-access';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { debounce, interval, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-ui-auth-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormField, MatInput, MatLabel, MatButton, MatError],
  templateUrl: './auth-dialog.component.html',
  styleUrl: './auth-dialog.component.scss'
})
export class AuthDialogComponent implements OnInit {
  public form: FormGroup<any> | undefined;
  public successText: string | undefined;
  public testEmail = '';
  public testPassword = '';

  public dialogRef = inject(MatDialogRef<AuthDialogComponent>);
  public data = inject<AuthDialogOptions>(MAT_DIALOG_DATA);
  public isUsernameAvailable = true;

  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  ngOnInit() {
    this.dialogRef.updateSize('90%');
    this.dialogRef.disableClose = true;
    if (this.data.process === 'signUp') {
      this.createRegisterForm();
      this.watchUsername();
    } else {
      this.createSignInForm();
    }
  }

  private createSignInForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private createRegisterForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  private watchUsername() {
    this.form?.controls['username'].valueChanges
      .pipe(
        debounce(() => interval(1500)),
        switchMap(username => {
          return this.authService.isUsernameAvailable(username);
        })
      )
      .subscribe(isAvailable => this.isUsernameAvailable = isAvailable);
  }

  public authAction() {
    if (this.form) {
      if (this.data.process === 'signIn') {
        this.signInUser();
      } else {
        this.registerUser();
      }
    }
  }

  public cancelAuthAction() {
    this.router.navigateByUrl('/').then(() => this.dialogRef.close());
  }

  private registerUser() {
    if (this.form) {
      const user = this.form.value;
      this.authService.signUp(user).subscribe((data) => {
        this.signInUser();
      });
    }
  }

  private signInUser() {
    if (this.form) {
      const { username, password } = this.form.value;
      this.authService.signIn(username, password).subscribe((data) => {
        this.dialogRef.close();
      });
    }
  }
}
