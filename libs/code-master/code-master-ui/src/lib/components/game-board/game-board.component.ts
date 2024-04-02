import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CmGameService,
  Color,
  CsmGameTurn,
  TurnState,
  WinState
} from '@project-phoenix/code-master/code-master-data-access';
import { MatIcon } from '@angular/material/icon';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'code-master-ui-game-board',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.scss'
})
export class GameBoardComponent implements OnInit, OnDestroy {
  @Input() colors: string[] = [];
  @Input() masterColors: string[] = [];
  @Input() state = WinState.InProgress;

  public turns: CsmGameTurn[] = [];
  public turnState = TurnState;
  public winState = WinState;

  private gameService = inject(CmGameService);
  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnInit() {
    this.gameService.getTurns()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(turns => {
        this.turns = turns;
      });
  }

  toggleSelected(turnState: TurnState, color: Color, selectedColor?: string) {
    this.gameService.toggleSelectedColor(turnState, color, selectedColor);
  }

  completeTurn(turn: CsmGameTurn, idx: number) {
    if (turn.turnState === TurnState.InProgress && this.gameService.canSelectColor(this.turns)) {
      turn.turnState = TurnState.Complete;
      if (idx > 0) {
        this.turns[idx - 1].turnState = TurnState.InProgress;
      }
      turn.pins = this.gameService.completeTurn(turn, idx);
    }
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
