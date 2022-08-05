import { ActionType } from './action.type';
import { Dispatch } from 'redux';
import { Action } from '../reducers/reducer.type';

export const IncreaseScore = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PLUS,
      payload: amount,
    });
  };
};

export const DecreaseScore = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.MINUS,
      payload: amount,
    });
  };
};

export const ResetScore = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESET,
    });
  };
};
