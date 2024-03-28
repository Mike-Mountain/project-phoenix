import { inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CmSettingsService } from '@project-mike/code-master/code-master-data-access';
import { BehaviorSubject, Observable } from 'rxjs';
import { InstructionsComponent, SettingsComponent } from '@project-mike/code-master/code-master-ui';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  private titleSrc = new BehaviorSubject<string>('Project Mike');

  private matDialog = inject(MatDialog);
  private settingsService = inject(CmSettingsService);

  updateTitle(title: string) {
    this.titleSrc.next(title);
  }

  getTitle(): Observable<string> {
    return this.titleSrc.asObservable();
  }

  showInstructions(config?: MatDialogConfig) {
    this.matDialog.open(InstructionsComponent, config);
  }

  showSettings(config?: MatDialogConfig) {
    this.matDialog
      .open(SettingsComponent, config)
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.settingsService.updateSettings(data);
        }
      });
  }
}
