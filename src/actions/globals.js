import Types from './actionTypes';

export const setHomeTab = homeTab =>
  ({ type: Types.SET_HOME_TAB, homeTab });
export const setSpinnerVisible = spinnerVisible =>
  ({ type: Types.SET_SPINNER_VISIBLE, spinnerVisible });
export const setUserInfo = userInfo=>
({type: Types.SET_USER_INFO, userInfo});
export const updateUserInfo = userInfo=>
({type: Types.UPDATE_USER_INFO, userInfo});
export const setDeviceToken = deviceToken=>
({type: Types.SET_DEVICE_TOKEN, deviceToken});
export const setTimeLimit = limit=>
({type: Types.SET_TIME_LIMIT, limit});
export const setData = data =>
({type: Types.SET_DATA, data});
