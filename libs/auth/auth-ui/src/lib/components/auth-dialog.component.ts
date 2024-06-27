import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'auth-ui-auth-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-dialog.component.html',
  styleUrl: './auth-dialog.component.scss',
})
export class AuthDialogComponent {}
