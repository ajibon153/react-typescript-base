import { ActionType } from '../actions/action.type';

interface PlusAction {
  type: ActionType.PLUS;
  payload: number;
}

interface MinusAction {
  type: ActionType.MINUS;
  payload: number;
}

interface ResetAction {
  type: ActionType.RESET;
}

// type Action = {
//   type: string;
//   payload?: number;
// };

export type Action = PlusAction | MinusAction | ResetAction;
