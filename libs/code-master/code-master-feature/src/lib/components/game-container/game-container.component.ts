import { AfterViewInit, Component, inject, Inject, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { GameBoardComponent } from '@project-phoenix/code-master/code-master-ui';
import {
  CmGameService,
  CmSettingsService,
  colors,
  createCsmGame,
  WinState
} from '@project-phoenix/code-master/code-master-data-access';
import { MatDialog } from '@angular/material/dialog';
import { ReplaySubject, switchMap, takeUntil } from 'rxjs';
import { MatButton } from '@angular/material/button';
import { ThemeService } from '@project-phoenix/shared/shared-ui';
import { Theme } from '@project-phoenix/shared/shared-data-access';

@Component({
  selector: 'code-master-feature-game-container',
  standalone: true,
  imports: [CommonModule, GameBoardComponent, MatButton],
  templateUrl: './game-container.component.html',
  styleUrl: './game-container.component.scss'
})
export class GameContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('gameOver') private gameOver: TemplateRef<HTMLElement> | undefined;

  public computerColors: string[] = [];
  public colors = colors;
  public showColors = false;

  public state: WinState = WinState.InProgress;
  public WinsState = WinState;


  private turns = 0;

  private gameService = inject(CmGameService);
  private cmSettingsService = inject(CmSettingsService);
  private dialog = inject(MatDialog);
  private themeService = inject(ThemeService);
  // private toolbarService = inject(ToolbarService);

  private destroyed$ = new ReplaySubject<boolean>(1);

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.themeService.updateTheme(Theme.CODE_MASTER);

    // this.toolbarService.updateTitle('Code Master');

    this.cmSettingsService.getSettings()
      .pipe(
        takeUntil(this.destroyed$),
        switchMap((settings) => {
          this.colors = settings.colors;
          this.turns = settings.turnsNumber;
          this.gameService.selectComputerColors();
          return this.gameService.getWinColors();
        })
      )
      .subscribe((winColors) => {
        this.computerColors = winColors;
        this.gameService.setTurns(createCsmGame(this.turns));
      });
  }

  ngAfterViewInit(): void {
    this.gameService.getWinState()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((winState) => {
        this.state = winState;
        const inProgress = winState === WinState.InProgress;
        this.showColors = !inProgress;
        if (this.gameOver && !inProgress) {
          this.dialog.open(this.gameOver);
        }
      });
  }

  public playAgain(): void {
    window.location.reload();
  }

  ngOnDestroy(): void {
    // Reset theme
    this.document.body.classList.remove('code-master');
    this.document.body.classList.add('default-dark');
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
