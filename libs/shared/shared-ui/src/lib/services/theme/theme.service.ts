import { Injectable, inject, Renderer2, Inject } from '@angular/core';
import { Theme } from '@project-phoenix/shared/shared-data-access';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  public updateTheme(theme: Theme) {
    const classList = this.document.body.classList;
    switch (true) {
      case classList.contains(Theme.CODE_MASTER):
        this.document.body.classList.remove(Theme.CODE_MASTER);
        break;
      case classList.contains(Theme.MOVIES):
        this.document.body.classList.remove(Theme.MOVIES);
        break;
      default:
        this.document.body.classList.remove(Theme.DEFAULT);
        break;
    }
    this.document.body.classList.add(theme);
  }
}
