import { Component, inject, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthDialogOptions, AuthService } from '@project-mike/shared/shared-data-access';
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
  private authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { options: AuthDialogOptions }) {
  }

  ngOnInit() {
    this.dialogRef.updateSize('90%');
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', this.data.options.process === 'register' ? Validators.required : undefined]
    });
  }

  public createPermanentAccount() {
    this.data.options.process = 'register';
  }

  public createTestAccount() {
    this.authService.createTestAccount().subscribe((details: {
      email: string,
      password: string,
      successText: string
    }) => {
      this.testEmail = details.email;
      this.testPassword = details.password;
      this.successText = details.successText;
    });
  }

  public authAction() {
    if (this.form) {
      const response = this.form.value;
      if (this.data.options.process === 'signIn') {
        this.signInUser(response.email, response.password);
      } else {
        this.registerUser(response.email, response.password, response.confirmPassword);
      }
    }
  }

  private registerUser(email: string, password: string, confirmPassword: string) {
    if (password === confirmPassword) {
      this.authService.createUserWithEmailAndPassword(email, password)
        .subscribe(() => this.dialogRef.close());
    }
  }

  private signInUser(email: string, password: string) {
    this.authService.signInWithEmailAndPassword(email, password)
      .subscribe(() => this.dialogRef.close());
  }
}
