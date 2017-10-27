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
import {CachedImage} from 'react-native-cached-image';
class Feed extends Component {

  constructor(props) {
    super(props);
    
    this.state = { img: this.props.navigation.state.params.img,
    };
  }
  componentWillMount() {
    this.props.setFeedNavigator(this.props.navigation);
  }

  render() { 
    return (
      <View style={{flex:1}}> 
        <NavigationBar
          statusBar={{style: 'light-content',tintColor:'black'}}                                                  
          style={Styles.nav} 
          title={CommonWidgets.renderNavBarHeader('Preview')}
          tintColor={Colors.brandSecondary}
          leftButton={CommonWidgets.renderNavText('Cancel', () => {this.props.navigation.goBack()})} />
        <Image source={{uri: this.state.img}} style={{width: Metrics.screenWidth, height: Metrics.innerHeight}} resizeMode='stretch'/>        
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
