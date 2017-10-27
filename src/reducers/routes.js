import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

export const initialState = Immutable({
  appNavigator: null,
  mainNavigator: null,
  feedNavigataor: null,
  insightNavigator: null,
  postNavigator: null,
  scheduleNavigator: null,
  settingNavigator: null,
});

const appNavigator = (state, action) => ({
  ...state,
  appNavigator: action.appNavigator,
});
const mainNavigator = (state, action) => ({
  ...state,
  mainNavigator: action.mainNavigator,
});
const feedNavigataor = (state, action) => ({
  ...state,
  feedNavigator: action.feedNavigator,
});
const insightNavigator = (state, action) => ({
  ...state,
  insightNavigator: action.insightNavigator,
});
const postNavigator = (state, action) => ({
  ...state,
  postNavigator: action.postNavigator,
});
const scheduleNavigator = (state, action) => ({
  ...state,
  scheduleNavigator: action.scheduleNavigator,
});
const settingsNavigator = (state, action) => ({
  ...state,
  settingNavigator: action.settingsNavigator,
});
const actionHandlers = {
  [Types.SET_APP_NAVIGATOR]: appNavigator,
  [Types.SET_MAIN_NAVIGATOR]: mainNavigator,
  [Types.SET_FEED_NAVIGATOR]: feedNavigataor, 
  [Types.SET_INSIGHT_NAVIGATOR]: insightNavigator,      
  [Types.SET_POST_NAVIGATOR]: postNavigator,         
  [Types.SET_SCHEDULE_NAVIGATOR]: scheduleNavigator,
  [Types.SET_SETTINGS_NAVIGATOR]: settingsNavigator,
};

export default createReducer(initialState, actionHandlers);