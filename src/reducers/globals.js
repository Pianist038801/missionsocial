import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';
import CT from '@src/constants';

export const initialState = Immutable({
  homeTab: 'AN10NA',
  spinnerVisible: false,
  userInfo: {
    avatarUri: CT.AVATAR_PLACEHOLDER,
    username: 'David',
    winning: 0,
    donation: 0,
  },
  data:{
    totalSquare: 0,
    usedSquare:0,
    gamelist:{},
    teamlist:{},
    searchKey:'',
    feeds: [],
    gamedata: {},
  },
  deviceToken: null,
});

const homeTab = (state, action) => ({
  ...state,
  homeTab: action.homeTab,
});

const spinnerVisible = (state, action) => ({
  ...state,
  spinnerVisible: action.spinnerVisible,
});

const setUserInfo = (state, action) => ({
  ...state,
  userInfo: action.userInfo,                                      
});
const updateUserInfo = (state, action) => ({
  ...state,
  userInfo: Object.assign({}, state.userInfo, action.userInfo)                                      
});
const setDeviceToken = (state, action) => ({
  ...state,
  deviceToken: action.deviceToken,
  userInfo:{...state.userInfo, deviceToken: action.deviceToken},
});
const setData = (state, action) => ({
  ...state,
  data: Object.assign({},state.data, action.data)
});
const actionHandlers = {
  [Types.UPDATE_USER_INFO]: updateUserInfo,
  [Types.SET_HOME_TAB]: homeTab,
  [Types.SET_SPINNER_VISIBLE]: spinnerVisible,
  [Types.SET_USER_INFO]: setUserInfo,
  [Types.SET_DEVICE_TOKEN]: setDeviceToken,
  [Types.SET_DATA]: setData,
};

export default createReducer(initialState, actionHandlers);
