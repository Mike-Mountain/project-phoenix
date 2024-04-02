import { CodeMasterSettings, colors } from '@project-phoenix/code-master/code-master-data-access';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function createCodeMasterSettings(settings?: CodeMasterSettings) {
  return {
    turnsNumber: settings?.turnsNumber || 10,
    colorsNumber: settings?.colorsNumber || 4,
    colors: settings?.colors || colors,
    includeBlanks: settings?.includeBlanks || true,
    duplicateColors: settings?.duplicateColors || true
  } as CodeMasterSettings;
}

export function createCodeMasterSettingsForm(
  formBuilder: FormBuilder,
  settings: CodeMasterSettings
): FormGroup {
  return formBuilder.group({
    turnsNumber: [settings.turnsNumber, Validators.required],
    colorsNumber: [settings.colorsNumber, Validators.required],
    colors: [settings.colors, Validators.required],
    includeBlanks: [settings.includeBlanks, Validators.required],
    duplicateColors: [settings.duplicateColors, Validators.required]
  });
}
