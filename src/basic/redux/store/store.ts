import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/reducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const Reducer = combineReducers({
  score: rootReducer,
});

export type State = any | ReturnType<typeof Reducer>;
