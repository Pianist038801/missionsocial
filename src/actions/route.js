import Types from './actionTypes';

export const setFeedNavigator = feedNavigator =>
  ({ type: Types.SET_FEED_NAVIGATOR, feedNavigator });
export const setScheduleNavigator = scheduleNavigator =>
  ({ type: Types.SET_SCHEDULE_NAVIGATOR, scheduleNavigator });
export const setSettingsNavigator = settingsNavigator =>
  ({ type: Types.SET_SETTINGS_NAVIGATOR, settingsNavigator });
export const setInsightNavigator = insightNavigator =>
  ({ type: Types.SET_INSIGHT_NAVIGATOR, insightNavigator });
export const setPostNavigator = postNavigator =>
  ({ type: Types.SET_POST_NAVIGATOR, postNavigator });
export const setAppNavigator = appNavigator =>
  ({ type: Types.SET_APP_NAVIGATOR, appNavigator });
export const setMainNavigator = mainNavigator =>
  ({ type: Types.SET_MAIN_NAVIGATOR, mainNavigator });
