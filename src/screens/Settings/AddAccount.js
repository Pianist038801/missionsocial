import React, { Component } from 'react';
import { StyleSheet, Modal, TextInput, Platform, ScrollView, View, Alert, TouchableOpacity, FlatList, Keyboard, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import NavigationBar from 'react-native-navbar';
import { setSettingsNavigator } from '@actions/route';
import CommonWidgets from '@components/CommonWidgets';
import CT from '@src/constants';
import { Metrics, Styles, Images, Colors, Fonts } from '@theme/';
import Utils from '@src/utils'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { setSpinnerVisible } from '@actions/globals';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OverlaySpinner from '@components/OverlaySpinner';
import {Button} from 'react-native-elements';
import { SocialIcon } from 'react-native-elements'
class AddAccount extends Component {

  constructor(props) {
    super(props);
    this.state = { st: 1,
    };
  }
  componentWillMount() {
    this.props.setSettingsNavigator(this.props.navigation);
  }
  gotoSubPage = (socialType)=>{
    this.props.navigation.navigate('addSubAccount', {socialType: socialType});
  }
  render() {
    
    return (
      <View style={{flex:1}}> 
        <NavigationBar
          statusBar={{style: 'light-content',tintColor:'black'}}                                                  
          style={Styles.nav} 
          title={CommonWidgets.renderNavBarHeader('Add Social Accounts')}
          tintColor={Colors.brandSecondary}
          rightButton={CommonWidgets.renderNavText('Done', () => {this.props.navigation.goBack()})} />
      <KeyboardAwareScrollView
        style={{ flex: 1,height: Metrics.innerHeight, padding: Metrics.defaultMargin, backgroundColor: Colors.brandSecondary }}
        automaticallyAdjustContentInsets={false}>
        <Text style={{ ...Fonts.style.h6,   color: Colors.textPrimary, paddingVertical: Metrics.defaultMargin }}>ACCOUNTS LINKED</Text>
        {CommonWidgets.renderSelectFeed()}
        {CommonWidgets.renderSelectFeed()}
        {CommonWidgets.renderSelectFeed()}
        <Text style={{ ...Fonts.style.h6,   color: Colors.textPrimary, paddingVertical: Metrics.defaultMargin }}>LINK MORE ACCOUNTS</Text>
        {CommonWidgets.renderSocialButton('facebook', this.gotoSubPage)}
        {CommonWidgets.renderSocialButton('twitter', this.gotoSubPage)}
        {CommonWidgets.renderSocialButton('instagram', this.gotoSubPage)}
        {CommonWidgets.renderSocialButton('linkedin', this.gotoSubPage)}
        {CommonWidgets.renderSocialButton('google-plus', this.gotoSubPage)}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddAccount);
