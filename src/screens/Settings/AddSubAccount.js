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
import { SocialIcon } from 'react-native-elements';

class AddSubAccount extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      socialType: props.navigation.state.params.socialType
    };
  }
  componentWillMount() {
    this.props.setSettingsNavigator(this.props.navigation);
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
        <Text style={{ ...Fonts.style.h6,   color: Colors.textPrimary, paddingVertical: Metrics.defaultMargin }}>
          WOULD YOU LIKE TO CONNECT YOUR FACEBOOK PAGES?
        </Text>
        {CommonWidgets.renderSelectFeed()}
        {CommonWidgets.renderSelectFeed()}
        {CommonWidgets.renderSelectFeed()}
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
export default connect(mapStateToProps, mapDispatchToProps)(AddSubAccount);