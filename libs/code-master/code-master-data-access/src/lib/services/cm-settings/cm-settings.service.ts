import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CodeMasterSettings } from '../../models';
import { createCodeMasterSettings } from '../../functions';

@Injectable({
  providedIn: 'root'
})
export class CmSettingsService {
  private settingsSrc = new BehaviorSubject<CodeMasterSettings>(createCodeMasterSettings());

  public updateSettings(settings: Partial<CodeMasterSettings>): void {
    const currentSettings = this.settingsSrc.value;
    const newSettings: CodeMasterSettings = {
      ...currentSettings,
      ...settings
    };
    this.settingsSrc.next(newSettings);
  }

  public getSettings(): Observable<CodeMasterSettings> {
    return this.settingsSrc.asObservable();
  }
}
