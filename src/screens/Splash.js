import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux'; 
import { Styles, Images, Colors } from '@theme/';
import Utils from '@src/utils';
import {setAppNavigator} from '@actions/route';
import {setData, } from '@actions/globals';
import Types from '@actions/actionTypes';
import {setDeviceToken, setUserInfo} from '@actions/globals';
import RNFetchBlob from 'react-native-fetch-blob'
//Removing RNFetchBlob.DocumentDir Error 
 

class Splash extends Component {

  constructor(props) {
    super(props);
      mthis = this; 
      console.ignoredYellowBox = [ 'Setting a timer' ]
  }
 
  componentWillMount() {
    this.props.setAppNavigator(this.props.navigation);
    setTimeout(() => {     
      this.props.navigation.dispatch(Utils.getResetAction('login'));
    }, 500); 
  }

//   componentWillMount() {
//         OneSignal.addEventListener('received', this.onReceived);
//         OneSignal.addEventListener('opened', this.onOpened);
//         OneSignal.addEventListener('registered', this.onRegistered);
//         OneSignal.addEventListener('ids', this.onIds);
//     }

    // componentWillUnmount() {
    //     OneSignal.removeEventListener('received', this.onReceived);
    //     OneSignal.removeEventListener('opened', this.onOpened);
    //     OneSignal.removeEventListener('registered', this.onRegistered);
    //     OneSignal.removeEventListener('ids', this.onIds);
    // }
    //   onReceived(notification) {
    //     console.log("Notification received: ", notification);
    // }

    // onOpened(openResult) {
    //   console.log('Message: ', openResult.notification.payload.body);
    //   console.log('Data: ', openResult.notification.payload.additionalData);
    //   console.log('isActive: ', openResult.notification.isAppInFocus);
    //   console.log('openResult: ', openResult);
    // }

    // onRegistered(notifData) {
    //     console.log("Device had been registered for push notifications!", notifData);
    // }
 
//   onIds(device) {  
     
//     mthis.props.setDeviceToken(device.userId); 
//     Alert.alert(JSON.stringify(device.userId));
//      api('/user/isLoggedIn',{deviceToken: device.userId}).then(res=>
//      {
//       if(res.success == false){//Logged Out
//          setTimeout(() => { 
//           mthis.props.navigation.dispatch(Utils.getResetAction('login'));
//         }, 1500);
//       }
//       else{   
//         mthis.props.setUserInfo(res.userInfo);
//         mthis.props.navigation.dispatch(Utils.getResetAction('main')); 
//       }
//      }) 
//   }

  render() {
    return (
      <Image
        resizeMode={'stretch'}
        style={[Styles.fixedFullScreen]}
        source={Images.bkgSplash} />
    );
  }
}

Splash.propTypes = {
  dispatch: React.PropTypes.func.isRequired, 
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch, 
    setAppNavigator: (nav)=>dispatch(setAppNavigator(nav))
  };
}
function mapStateToProps(state) {
  const globals = state.get('globals');
  //convert stateToProps
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);