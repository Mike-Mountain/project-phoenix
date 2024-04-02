import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Color, CsmGameTurn, Pin, TurnState, WinState } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CmGameService {

  private winColorsSrc = new BehaviorSubject<string[]>([]);
  private turnsSrc = new BehaviorSubject<CsmGameTurn[]>([]);
  private winStateSrc = new BehaviorSubject<WinState>(WinState.InProgress);

  public getWinColors(): Observable<string[]> {
    return this.winColorsSrc.asObservable();
  }

  public getTurns(): Observable<CsmGameTurn[]> {
    return this.turnsSrc.asObservable();
  }

  public setTurns(turns: CsmGameTurn[]) {
    this.turnsSrc.next(turns);
  }

  public getWinState(): Observable<WinState> {
    return this.winStateSrc.asObservable();
  }

  public canSelectColor(turns: CsmGameTurn[]): boolean {
    let canSelect = true;
    turns.forEach(turn => {
      turn.colors.forEach(color => {
        if (color.selectable) {
          canSelect = false;
        }
      });
    });
    return canSelect;
  }

  public selectComputerColors() {
    // TODO: Get from settings
    const tempArray = Array.from(Array(4).keys());
    const colors = ['red', 'blue', 'green', 'yellow', ''];
    const winColors = tempArray.map(() => {
      const randomIdx = Math.floor(Math.random() * 5);
      return colors[randomIdx];
    });
    this.winColorsSrc.next(winColors);
  }

  public toggleSelectedColor(turnState: TurnState, color: Color, selectedColor?: string): void {
    if (turnState === TurnState.InProgress) {
      const canSelect = this.canSelectColor(this.turnsSrc.value);
      if (!selectedColor && !canSelect) {
        return;
      }

      if (selectedColor) {
        color.selectedColor = selectedColor;
      }

      color.selectable = !color.selectable;
    }
  }

  public completeTurn(turn: CsmGameTurn, gameIdx: number): Pin[] {
    const pins: Pin[] = [];
    const player: string[] = turn.colors.map((color) => color.selectedColor);
    const computer = this.winColorsSrc.value.map((i) => i);
    // Find exact match
    for (let i = player.length - 1; i >= 0; i--) {
      if (player[i] === computer[i]) {
        pins.push({ color: 'black' });
        player.splice(i, 1);
        computer.splice(i, 1);
      }
    }
    // Find partial match. Separate for loop to prevent counting black pins
    for (let i = player.length - 1; i >= 0; i--) {
      if (computer.includes(player[i])) {
        const idx = computer.findIndex((color) => color === player[i]);
        pins.push({ color: 'white' });
        player.splice(i, 1);
        computer.splice(idx, 1);
      } else {
        pins.push({ color: '' });
      }
    }
    this.checkForWin(pins, gameIdx);
    return this.sortPins(pins);
  }

  public checkForWin(pins: Pin[], gameIdx: number) {
    const state =
      pins.filter((pin) => pin.color !== 'black').length === 0
        ? WinState.Won
        : gameIdx === 0
          ? WinState.Lost
          : WinState.InProgress;
    this.winStateSrc.next(state);
  }

  private sortPins(pins: Pin[]): Pin[] {
    return pins.sort((a, b) => {
      if (a.color === '') {
        return 1;
      } else {
        if (a.color === 'white' && b.color === 'black') {
          return 1;
        }
        return -1;
      }
    });
  }
}
