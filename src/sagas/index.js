import Types from '@actions/actionTypes';
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
 
import React from 'react';
import {Alert} from 'react-native';

// function* getFeed(action) {
//   const getAccount = function(accessToken)
//   {
//     return fetch( `https://graph.facebook.com/v2.5/me?fields=accounts&access_token=${accessToken}`).then(
//       res=>res.json()
//     ).catch(err=>
//       console.log(err)
//     );
//   }
//   const getFeedsFromPageId= function(pageId){
//     return fetch( `https://graph.facebook.com/v2.8/${pageId}/posts?access_token=1091734934238015%7C57f5c49e225f15dc6c1cd67e8dc36d1c&fields=type,message,story,created_time,name,link,full_picture,from.fields(name,picture.fields(url)),source&limit=100`).then(
//       res=> res.json()  
//     ).catch(err=>
//       console.log(err)
//     );
//   }
//    try { 
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: true})
//       let {accessToken} = action.team1;
//       const res = yield call(getAccount, accessToken)
//       console.log(res);
//       const accountArray = res.accounts.data;
//       const pageArray = accountArray.map(x=>x.id);
//       var feedArray = [];
//       for(var i = 0; i < pageArray.length ; i++)
//       { 
//         var itemFeed = (yield call(getFeedsFromPageId,pageArray[i])).data;
//         console.log(itemFeed);
//         feedArray = feedArray.concat(itemFeed);
//       }
//       console.log(feedArray);
//       yield put({ type: Types.SET_DATA, data: {feeds: feedArray }}); 
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: false})
//       /*const res = yield call(api, '/user/togglefavorite',{userId: action.userId, teamId: action.teamId}); 
//       console.log(res);
//       //yield put({ type: Types.SET_DATA, data: {teamlist: res.data }});
//       yield put({ type: "GET_USER_INFO"});
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: false})*/
//    } catch (e) {
//      console.log(e.message);
//       yield put({ type: "POSTS_FETCH_FAILED", err: e.message });
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: false})
//    }
// } 
// function* toggleFavorite(action) {
//    try { 
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: true})
      
//       const res = yield call(api, '/user/togglefavorite',{userId: action.userId, teamId: action.teamId}); 
//       console.log(res);
//       //yield put({ type: Types.SET_DATA, data: {teamlist: res.data }});
//       yield put({ type: "GET_USER_INFO"});
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: false})
//    } catch (e) {
//       yield put({ type: "POSTS_FETCH_FAILED", err: e.message });
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: false})
//    }
// }

// function* getBoardInfo(action)
// {
  
//     function createEventChannel(gameid) {
//         const listener = eventChannel(
//             emit => {
//                 database.ref('/boards/'+gameid)
//                 .on('value', data => emit(data.val()));
//               return () => database.ref('/boards/'+gameid).off(listener);
//             }
//         ); 
//         return listener;
//     }
 
//     try{
//       const boardUpdate = createEventChannel(action.gameid);
//       while(true) {
//           const item = yield take(boardUpdate);
//           yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: true})
//           yield put({type: Types.SET_DATA, data: {gamedata: item}});
//           yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: false})
//       }
//     }
//     catch (e) {
//       yield put({ type: "POSTS_FETCH_FAILED", err: e.message }); 
//     }
// }
// function* getUserInfo(action)
// {
//      try {
//        console.log("GET_USER_INFO");
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: true})
//       const globalsSelector = state => state.get('globals');;

//       const globals = yield select(globalsSelector);
//       console.log(globals.userInfo.userId);

//       const res = yield call(api, '/user/getUserInfo',{userId: globals.userInfo.userId}); 
//       console.log("USERINFO = " + res);

//       //yield put({ type: Types.SET_DATA, data: {teamlist: res.data }});
//       yield put({ type: Types.SET_USER_INFO, userInfo: res.data});
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: false})
//    } catch (e) {
//       yield put({ type: "POSTS_FETCH_FAILED", err: e.message });

//    }
// }
// function* fetchTeamList(action) {
//    try { 
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: true})
//       const res = yield call(api, '/admin/teamlist'); 
//       console.log(res);
//       yield put({ type: Types.SET_DATA, data: {teamlist: res.data }});
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: false})
//    } catch (e) {
//      yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: false})
//       yield put({ type: "POSTS_FETCH_FAILED", err: e.message });
//    }
// }
// function* fetchGameList(action){ 
//     try { 
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: true})
//       const res = yield call(api, '/admin/gamelist'); 
//       console.log(res);
//       yield put({ type: Types.SET_DATA, data: {gamelist: res.data }});
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: false})
//     } catch (e) { 
//         //yield put({ type: "POSTS_FETCH_FAILED", err: e.message });
//     }
// }
//     try { 
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: true})
//       const res = yield call(api, '/admin/gamelist'); 
//       console.log(res);
//       yield put({ type: Types.SET_DATA, data: {gamelist: res.data }});
//       yield put({type: Types.SET_SPINNER_VISIBLE, spinnerVisible: false})
//     } catch (e) { 
//         //yield put({ type: "POSTS_FETCH_FAILED", err: e.message });
//     }
// }
 
/*
  Does not allow concurrent fetches.
*/
export default mySagas =  function* mySagas() {
  // yield takeLatest("GET_USER_INFO", getUserInfo);
  // yield takeLatest("GET_TEAM_LIST", fetchTeamList);
  // yield takeLatest("GET_GAME_LIST", fetchGameList);
  // //yield takeLatest("GET_INITIAL_GAME_LIST",fetchInitialGameList);
  // yield takeLatest("TOGGLE_FAVORITE", toggleFavorite);
  // yield takeLatest("GET_FEED",getFeed);
  // yield takeLatest("GET_BOARD_INFO", getBoardInfo)
}
