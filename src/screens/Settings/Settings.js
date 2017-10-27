import React, { Component } from 'react';
import { StyleSheet, Modal, TextInput, Platform, ScrollView, View, Alert, TouchableOpacity, FlatList, Keyboard, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import NavigationBar from 'react-native-navbar';
import { setSettingsNavigator } from '@actions/route';
import CommonWidgets from '@components/CommonWidgets'; 
import { Metrics, Styles, Images, Colors, Fonts } from '@theme/'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { setSpinnerVisible } from '@actions/globals';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OverlaySpinner from '@components/OverlaySpinner';       
import Utils from '@src/utils';
class Settings extends Component {
 
  componentWillMount() {
    this.props.setSettingsNavigator(this.props.navigation);
  }
  logOut=()=>{
    this.props.navigator.appNavigator.dispatch(Utils.getResetAction('login'))
  }
  render() { 
    return (
      <View style={{flex:1}}> 
        <NavigationBar
          statusBar={{style: 'light-content',tintColor:'black'}}                                                  
          style={[Styles.nav,{backgroundColor:'white'}]} 
          title={CommonWidgets.renderNavBarHeader('Settings', Colors.textPrimary)}
          tintColor={Colors.brandSecondary}/>
      <KeyboardAwareScrollView
        style={{ flex: 1,height: Metrics.innerHeight,  backgroundColor: Colors.colGray }}
        automaticallyAdjustContentInsets={false}>  
        {CommonWidgets.renderSettingsItem('Manage Social Accounts', ()=>{this.props.navigation.navigate('addAccount')})}
        {CommonWidgets.renderSettingsItem('Logout', this.logOut)} 
      </KeyboardAwareScrollView>    
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setSettingsNavigator: nav => dispatch(setSettingsNavigator(nav)),
    setSpinnerVisible: val => dispatch(setSpinnerVisible(val)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  const navigator = state.get('routes');
  return { globals, navigator };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
