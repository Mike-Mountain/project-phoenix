import { Component, inject, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CodeMasterSettings,
  createCodeMasterSettings,
  createCodeMasterSettingsForm
} from '@project-phoenix/code-master/code-master-data-access';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'code-master-ui-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  settings: CodeMasterSettings = createCodeMasterSettings();
  settingsForm: FormGroup | undefined;
  colorOptions = [
    'yellow',
    'light-green',
    'green',
    'light-blue',
    'blue',
    'indigo',
    'purple',
    'magenta',
    'red',
    'orange',
    'tangerine',
    'peach'
  ];

  private formBuilder = inject(FormBuilder);
  public dialogRef = inject(MatDialogRef<SettingsComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
  }

  ngOnInit() {
    this.settingsForm = createCodeMasterSettingsForm(
      this.formBuilder,
      this.settings
    );
  }

  saveSettings() {
    const settings = createCodeMasterSettings(this.settingsForm?.value);
    this.dialogRef.close(settings);
  }

  setColor(color: string) {
    this.settings.colors.shift();
    this.settings.colors.push(color);
  }

}
