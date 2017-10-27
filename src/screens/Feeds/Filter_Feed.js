import React, { Component } from 'react';
import { StyleSheet, Modal, TextInput, Platform, ScrollView, View, Alert, TouchableOpacity, FlatList, Keyboard, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import NavigationBar from 'react-native-navbar';
import { setFeedNavigator } from '@actions/route';
import CommonWidgets from '@components/CommonWidgets';
import CT from '@src/constants';
import { Metrics, Styles, Images, Colors, Fonts } from '@theme/';
import Utils from '@src/utils'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { setSpinnerVisible } from '@actions/globals';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OverlaySpinner from '@components/OverlaySpinner';
import {Button} from 'react-native-elements';
class Filter_Feed extends Component {

  constructor(props) {
    super(props);
    this.state = { st: 1,
    };
  }
  componentWillMount() {
    this.props.setFeedNavigator(this.props.navigation);
  }
  _renderAddFeedButton()
  {
    return(
      <Button
        backgroundColor={Colors.colGreen}
        icon={{name: 'plus-circle', color: 'white', size: Fonts.size.h4, type: 'font-awesome'}}
        color={Colors.white}
        textStyle={Fonts.style.h4}
        onPress={()=>this.props.navigation.navigate('add_feed')}
        title='ADD FEED' />
    )
  }
  render() {
    
    return (
      <View style={{flex:1}}> 
        <NavigationBar
          statusBar={{style: 'light-content',tintColor:'black'}}                                                  
          style={Styles.nav} 
          title={CommonWidgets.renderNavBarHeader('Filter Your Feed')}
          tintColor={Colors.brandSecondary}
          rightButton={CommonWidgets.renderNavText('Done', () => {this.props.navigation.goBack()})} />
      <KeyboardAwareScrollView
        style={{ flex: 1,height: Metrics.innerHeight, padding: Metrics.defaultMargin, backgroundColor: Colors.brandSecondary }}
        automaticallyAdjustContentInsets={false}> 
        {CommonWidgets.renderFeedItem()}
        {CommonWidgets.renderFeedItem()}
        {CommonWidgets.renderFeedItem()} 
        {this._renderAddFeedButton()}
      </KeyboardAwareScrollView>                 
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setFeedNavigator: nav => dispatch(setFeedNavigator(nav)),
    setSpinnerVisible: val => dispatch(setSpinnerVisible(val)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  const navigator = state.get('routes');
  return { globals, navigator };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter_Feed);
