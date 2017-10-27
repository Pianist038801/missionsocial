import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeDrawer } from '@actions/drawer';
import { View, StyleSheet, Text, Image, Alert, } from 'react-native';
import { Metrics, Images, Colors, Styles, Fonts } from '@theme/';
import { DrawerItems, TouchableOpacity } from 'react-navigation';
import Utils from '@src/utils';
import api from '@api';
import CommonWidgets from '@components/CommonWidgets'

const styles = StyleSheet.create({
  currency: {
    ...Fonts.style.h2,
    color: Colors.whiteLetter,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  infoView:{
    flex:1,
    backgroundColor: Colors.bk1,
    padding: 20, 
  },
  menuView:{
    flex:2,
    backgroundColor: Colors.bk2
  }
});

class DrawerContent extends Component {
  logOut(){
    let mthis = this; 
    api('/user/logOut',{email: this.props.globals.userInfo.email, fbUser: this.props.globals.userInfo.fbUser}).then(result=>
      {
        if(result.success == true)
          {
              mthis.props.routes.appNavigator.dispatch(Utils.getResetAction('login'));
          }
      });
  } 

  render() {
    return (
        <View style={styles.container}>
          {CommonWidgets.renderStatusBar(Colors.brandPrimary)}
          <View style={styles.infoView}>
            <View style={{flex: 1, marginTop: 30,justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{ width:Metrics.screenWidth/5, height:Metrics.screenWidth/5}} resizeMode='stretch' source={{uri: this.props.globals.userInfo.avatarUri}}></Image>
              <Text style={{color: Colors.whiteLetter, fontSize:20}}>{this.props.globals.userInfo.username}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{...Styles.center, flex:1}}>
                <Text style={styles.currency}>${this.props.globals.userInfo.donation}</Text>
                <Text style={{...Fonts.style.h5, color: Colors.darkLetter, marginTop: 5,}}>DONATIONS</Text>
              </View>
              <View style={{...Styles.center,    flex:1}}>
                <Text style={styles.currency}>${this.props.globals.userInfo.winning}</Text>
                <Text style={{...Fonts.style.h5, color: Colors.darkLetter, marginTop: 5,}}>WINNINGS</Text>
              </View>
            </View>
             
          </View>
          <View style={styles.menuView}>
            <DrawerItems {...this.props} />
          </View>
            <Text onPress={()=>this.logOut()} style={{padding: 10, fontSize:20, color: Colors.whiteLetter, backgroundColor: Colors.bk1}}>
              LOGOUT
            </Text>            
        </View>
    );
  }
}
 
function mapDispatchToProps(dispatch) { 
  return {
    dispatch,
    replaceRoute: route => dispatch(replaceRoute(route)),
    closeDrawer: () => dispatch(closeDrawer()),
    setSpinnerVisible: spinnerVisible => dispatch(setSpinnerVisible(spinnerVisible)),
  };
}
function mapStateToProps(state) {
  const globals = state.get('globals');
  const routes = state.get('routes');
  return { globals, routes };
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
