import { Component, inject, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthDialogOptions, AuthService } from '@project-phoenix/shared/shared-data-access';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'shared-ui-auth-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormField, MatInput, MatLabel, MatButton],
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
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);

  ngOnInit() {
    this.dialogRef.updateSize('90%');
    this.data.process === 'signUp' ? this.createRegisterForm() : this.createSignInForm();
  }

  private createSignInForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
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

  public authAction() {
    if (this.form) {
      if (this.data.process === 'signIn') {
        this.signInUser();
      } else {
        this.registerUser();
      }
    }
  }

  private registerUser() {
    const user = this.form?.value;
    console.log(user);
  }

  private signInUser() {
    if (this.form) {
      const { username, password } = this.form.value;
      this.authService.signIn(username, password).subscribe((data) => {
        console.log(data);
        this.dialogRef.close();
      });
    }
  }
}
