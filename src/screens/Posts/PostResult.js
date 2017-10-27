import React, { Component } from 'react';
import { StyleSheet, Modal, TextInput, Platform, ScrollView, View, Alert, TouchableOpacity, FlatList, Keyboard, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import NavigationBar from 'react-native-navbar';
import { setPostNavigator } from '@actions/route';
import CommonWidgets from '@components/CommonWidgets';
import CT from '@src/constants';
import { Metrics, Styles, Images, Colors, Fonts } from '@theme/';
import Utils from '@src/utils'; 
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { setSpinnerVisible } from '@actions/globals';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OverlaySpinner from '@components/OverlaySpinner'; 
import ModalDropdown from 'react-native-modal-dropdown';
import Constants from '@src/constants';
import ActionSheet from 'react-native-actionsheet';
var buttons_own = ['Send Post','Schedule Post', 'Cancel'] 
const styles={
  dropDown:
  {
     width: Metrics.screenWidth,
     borderColor: Colors.colGray,
     borderLeftWidth: Metrics.defaultMargin,
     borderRightWidth: Metrics.defaultMargin,
     borderBottomWidth: Metrics.defaultMargin,
     backgroundColor: 'white'
  }
}
class PostResult extends Component {

  constructor(props) {
    super(props);
    let success = this.props.navigation.state.params.success;
    let date = this.props.navigation.state.params.time;
    this.state = { success: success, date:date
    };
  }
  componentWillMount() {
    this.props.setPostNavigator(this.props.navigation);
  }
  gotoEditPost =()=>
  {
    this.props.navigation.navigate('editPost');
  }
  render() { 
    return (
      <View style={{flex:1}}> 
        <NavigationBar
          statusBar={{style: 'light-content',tintColor:'black'}}                                                  
          style={[Styles.nav, {backgroundColor: (this.state.success?Colors.colGreen:Colors.colPink)}]} 
          title={this.state.success?CommonWidgets.renderNavBarHeader('Post Successful!',Colors.white):CommonWidgets.renderNavBarHeader('Post Failed!',Colors.white)}
          tintColor={Colors.brandSecondary} 
          rightButton={CommonWidgets.renderNavText('Done', () => {this.props.navigation.goBack()},Colors.white)} />
          <KeyboardAwareScrollView
          style={{ flex: 1,height: Metrics.innerHeight, padding: Metrics.defaultMargin, backgroundColor: Colors.brandSecondary }}
          automaticallyAdjustContentInsets={false}> 
          <Text style={{ ...Fonts.style.h6,   marginVertical: Metrics.defaultMargin, color: Colors.textPrimary }}>{this.state.success?`Scheduled at ${this.state.date}`:'Something went wrong'}</Text>
          {CommonWidgets.renderPostResultItem(this.gotoEditPost,this.state.success)}
        </KeyboardAwareScrollView>               
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setPostNavigator: nav => dispatch(setPostNavigator(nav)),
    setSpinnerVisible: val => dispatch(setSpinnerVisible(val)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  const navigator = state.get('routes');
  return { globals, navigator };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostResult);
