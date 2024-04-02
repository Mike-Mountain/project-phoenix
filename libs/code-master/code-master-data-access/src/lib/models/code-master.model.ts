import { TurnState } from './turn-state.enum';

export type Colors = 'red' | 'blue' | 'green' | 'yellow' | '';
export type Pins = 'black' | 'white' | '';

export const colors: string[] = ['red', 'blue', 'green', 'yellow'];

export interface CsmGameTurn {
  colors: Color[];
  pins: Pin[];
  turnState: TurnState;
}

export interface Color {
  selectable: boolean;
  selectedColor: string;
}

export interface Pin {
  color: Pins;
}
