import { colors, CsmGameTurn, TurnState } from '@project-phoenix/code-master/code-master-data-access';

export function createCsmGame(chances: number): CsmGameTurn[] {
  const gameTurns = Array.from(Array(chances).keys());
  return gameTurns.map((t, idx) => {
    return {
      turnState:
        idx === gameTurns.length - 1
          ? TurnState.InProgress
          : TurnState.NotStarted,
      colors: colors.map(() => {
        return { selectable: false, selectedColor: '' };
      }),
      pins: colors.map(() => {
        return { color: '' };
      })
    } as CsmGameTurn;
  });
}
