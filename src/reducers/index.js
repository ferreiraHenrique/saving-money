import { combineReducers } from 'redux';
import { clickReducer } from './transactionReducer';


export const Reducers = combineReducers({
  clickState: clickReducer
});
