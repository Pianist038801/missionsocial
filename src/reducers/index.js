import { combineReducers } from 'redux-immutable';
import globals from './globals';
import routes from './routes';
import drawer from './drawer'; 

const applicationReducers = {
  globals,
  drawer, 
  routes,
};

export default function createReducer() {
  return combineReducers(applicationReducers);
}
