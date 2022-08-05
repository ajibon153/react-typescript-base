import { Action } from './reducer.type';
import { ActionType } from '../actions/action.type';

const initialState: number = 0;

export const rootReducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.PLUS:
      return state + action.payload;

    case ActionType.MINUS:
      return state - action.payload;

    case ActionType.RESET:
      return 0;

    default:
      return state;
  }
};
