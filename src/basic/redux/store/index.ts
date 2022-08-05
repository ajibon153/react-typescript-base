import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/reducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const Reducer = combineReducers({
  rootReducer,
});
