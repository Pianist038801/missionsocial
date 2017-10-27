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
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Button} from 'react-native-elements';
var buttons_own = ['Send Post','Schedule Post', 'Cancel'] 
const styles={
  dropDown:
  {
    width: Metrics.screenWidth,  
    borderWidth: Metrics.defaultMargin, 
    borderTopWidth:0,
    borderColor: Colors.colGray,
    backgroundColor: Colors.white  ,
    borderRadius: 0,
    marginTop: Platform.OS=='android' ? -Metrics.statusBarHeight -4 : 0,
  }
}
class PostSchedule extends Component {

  constructor(props) {
    super(props);
    this.state = { post: 'Bla Bla Bla',
    showPicker: false,
    date: 'Wed, July 12, 3:50PM'
    };
  }
  componentWillMount() {
    this.props.setPostNavigator(this.props.navigation);
  }
  _renderDeleteButton()
  {
    return(
      <Button
        backgroundColor={Colors.colPink}
        color={Colors.white}
        style={{width:Metrics.screenWidth, marginLeft:-15,  }}
        textStyle={Fonts.style.h4}
        onPress={()=>{alert('DELETE')}}
        title='DELETE' />
    )
  }
  _renderDropRow= (rowData, sectionID, rowID, highlightRow)=>
  {
    console.log('Render' + rowData.toString());
    return(
      CommonWidgets.renderSelectFeed()
    )
  }
  showActionSheetMenu() {
    this.ActionSheet.show();
  }
  onActionSheetMenu(index) {
     
    switch (index) {
      case 0://Send POst
        //Posting Action
        //Get Result->Navigate To PostResult Screen
        this.props.navigation.navigate('postResult', {success: false});
        break;
      case 1://Schedule POst
        this.setState({showPicker: true});
        //this.props.navigation.navigate('postResult', {success: false});
        break;
      default:
    }
  }
  _showDateTimePicker = () => this.setState({ showPicker: true });
  
  _hideDateTimePicker = () => this.setState({ showPicker: false });

  _handleDatePicked = (date) => {
    this._hideDateTimePicker(); 
    this.props.navigation.navigate('postResult', {success: true, time: date});
  };
  render() { 
    return (
      <View style={{flex:1}}> 
        <NavigationBar
          statusBar={{style: 'light-content',tintColor:'black'}}                                                  
          style={[Styles.nav,{backgroundColor:'white'}]} 
          title={CommonWidgets.renderNavBarHeader('Post Schedule', Colors.textPrimary)}
          tintColor={Colors.brandSecondary} 
          rightButton={CommonWidgets.renderNavText('Edit', () => {this.props.navigation.navigate('editPost')})} />
      <KeyboardAwareScrollView
        style={{ flex: 1,height: Metrics.innerHeight,  backgroundColor: Colors.colGray }}
        automaticallyAdjustContentInsets={false}>  
        
        <ModalDropdown options={['option 1', 'option 2']} renderRow={this._renderDropRow}
          dropdownStyle={styles.dropDown} onDropdownWillHide={()=>{  return true;}}>
          <View style={{padding: Metrics.defaultMargin, backgroundColor: Colors.white, flexDirection: 'row', alignItems: 'center', borderBottomColor: Colors.colGray,
          borderBottomWidth: 1,}}>
          <ScrollView horizontal style={{width: Metrics.screenWidth*2/3}} contentContainerStyle={{alignItems:'center'}}>
            {CommonWidgets.renderAvatarPlaceholder( )}
            <Text style={{ ...Fonts.style.h5,  marginLeft:10, color: Colors.textPrimary }}>Filter by Account</Text> 
          </ScrollView>
          <View style ={{ position: 'absolute', right: Metrics.defaultMargin,  }}>
          <Icon type='font-awesome' name='angle-down' size={25} color={Colors.txtPink}/>
          </View>  
          </View>  
        </ModalDropdown>
        {CommonWidgets.renderSpacer(1, Colors.colGray)}
        <View style={{padding: Metrics.defaultMargin, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ ...Fonts.style.h5,   color: Colors.textPrimary }}>WED, JULY 12</Text>
          <Text style={{ ...Fonts.style.h5,   color: Colors.textPrimary }}>3:50 PM</Text> 
        </View>
        {CommonWidgets.renderScheduleItem({}, ()=>{})}    
        {CommonWidgets.renderScheduleItem({}, ()=>{})} 
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

export default connect(mapStateToProps, mapDispatchToProps)(PostSchedule);
