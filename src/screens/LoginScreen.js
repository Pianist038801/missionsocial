/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableWithoutFeedback, 
  Keyboard,
  View,
  Alert,
  TouchableOpacity,
  ActivityIndicator, 
  ImageBackground,
  Linking
} from 'react-native';      
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'                                     
import { Styles, Images, Colors, Metrics,Fonts } from '@theme/'; 
import { connect } from 'react-redux'; 
import MissionSocialAPI from '@shared/MissionSocialAPI';
import OverlaySpinner from '@components/OverlaySpinner';
import {setAppNavigator} from '@actions/route';
import CommonWidgets from '@components/CommonWidgets';
import { Divider, Button, CheckBox } from 'react-native-elements';
import Utils from '@src/utils';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null, 
  },
  input: {},
  centeredLogoSpot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  card: {
    flex: 0.5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  loginForm: {
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  white: {
    backgroundColor: 'white',
  },
  redColor: {
    backgroundColor: 'red',
  },
  textfieldWithFloatingLabel: {
    height: 70, // have to do it on iOS
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  loginButtonStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 20,
  },
  loginButtonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomAreaLogin: {
    ...Styles.center,
    flexDirection: 'row',
  },
  bottomAreaRegister: {
    ...Styles.center,
    flexDirection: 'column',
    height: Metrics.screenHeight / 10,
  },
});


class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      emailFocus: false,
      passwordFocus: false,
      rememberChecked: false,
      email: '',
      password: '',
    };
  }

  render() {
    return (
        <ImageBackground 
          source={Images.bkgLogin}
          style={[styles.backgroundImage]}>
          {CommonWidgets.renderStatusBar(Colors.brandPrimary)}
          <KeyboardAvoidingView behavior='padding' style={{ flex: 1, flexDirection: 'column', width: Metrics.screenWidth, justifyContent: 'flex-end', alignItems: 'center' }}>  
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{alignItems:'center', justifyContent: 'center', }}> 
            <Image style={{ width: Metrics.screenWidth / 2, height: Metrics.screenWidth / 2 }} resizeMode="contain" source={Images.logo} />
            {CommonWidgets.renderSpacer(35)}
            {this.renderInputArea()}
            {CommonWidgets.renderSpacer(14)}
            <Button
              raised
              borderRadius={30}
              onPress={() => this.props.navigation.navigate('main')}
              containerViewStyle={{ borderRadius: 30, width: Metrics.screenWidth / 3 }}
              backgroundColor="white"
              title="LOGIN"
              color={Colors.txtGreen}
              fontSize={Fonts.size.h7} />
            {CommonWidgets.renderSpacer(14)}
            <View style={styles.bottomAreaLogin}>
              <Text style={[Fonts.style.bottomText, { color: Colors.white }]}>
                Don't have an account yet?
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                backgroundColor={'transparent'}
                onPress={this.doRegister.bind(this)}>
                <Text style={[Fonts.style.hyperButtonText, { color: Colors.txtWhite, marginLeft: 5 }]}>
                        Sign up
                </Text>
              </TouchableOpacity>
            </View>
            {CommonWidgets.renderSpacer(7)}
            <TouchableOpacity activeOpacity={0.7}
              backgroundColor={'transparent'}
              onPress={this.doForgot.bind(this)}>
              <Text style={[Fonts.style.hyperButtonText, { color: Colors.txtWhite, marginLeft: 5 }]}>
                I forgot my password.
              </Text>
            </TouchableOpacity>
            {CommonWidgets.renderSpacer(14)}
            </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ImageBackground>
    );
  }
  doForgot=()=>
  {
    Linking.openURL("https://www.mt.cm/user/password").catch(err => console.error('An error occurred', err));
  }
  doRegister=()=>
  {
    Linking.openURL("https://www.mt.cm/user/register").catch(err => console.error('An error occurred', err));
  }
  renderInputArea = () => (
    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        autoCapitalize="none"
        style={Styles.textInputStyle}
        underlineColorAndroid={'transparent'}
        placeholder={'EMAIL OR USERNAME'}
        placeholderTextColor={Colors.txtPlaceholder}
        ref={a => this._textUser = a}
        multiline={false}
        alignText="center"
        onChangeText={text => this.setState({ email: text })}
        keyboardType={'email-address'}
        returnKeyType={'next'} 
        onFocus={() => {
            this.setState({ emailFocus: true, passwordFocus: false });
          }} />
      {Platform.OS != 'android' &&
      CommonWidgets.renderSpacer(4)}
      {CommonWidgets.renderDivider(Utils.getTextInputBorderColor(this.state.emailFocus))}
      {CommonWidgets.renderSpacer(2)}
      <Text style={[Fonts.style.bottomText, { color: Colors.white }]}>
            Enter your email address or username.
          </Text>
      {CommonWidgets.renderSpacer(14)}
      <TextInput
          autoCapitalize="none"
          style={Styles.textInputStyle}
          ref={a => this._textPass = a}
          underlineColorAndroid={'transparent'}
          placeholder={'PASSWORD'}
          secureTextEntry
          placeholderTextColor={Colors.txtPlaceholder}
          multiline={false}
          onChangeText={text => this.setState({ password: text })}
          onFocus={() => {
              this.setState({ emailFocus: false, passwordFocus: true });
          }} />
      {Platform.OS != 'android' &&
      CommonWidgets.renderSpacer(4)}
      {CommonWidgets.renderDivider(Utils.getTextInputBorderColor(this.state.passwordFocus))}
      {CommonWidgets.renderSpacer(2)}
      <Text style={[Fonts.style.bottomText, { color: Colors.white }]}>
            Enter the password that accompanies your email.
         </Text>
      {CommonWidgets.renderSpacer(4)}
    </View>
    )
  _renderLoginForm = () => {
    if (this.state.loading) {
      return (<ActivityIndicator
        size="large" style={{
          paddingBottom: 100,
        }} />);
    }

    return (
      <KeyboardAvoidingView style={[styles.loginForm]} behavior="padding">
        <View style={[styles.white]} />
      </KeyboardAvoidingView>
    );
  }
  _beginLogin = () => {
    this.setState({ loading: true });
    const me = this;
    MissionSocialAPI
    .attemptLogin(this.state.username, this.state.password)
    .then((value) => {
      if (value.errors == null) {
        Alert.alert('Login Success!', `Welcome ${value.data.seller_name}`);
        me.props.didLogin();
      } else {
        me.setState({ loading: false });
        Alert.alert('Login Issue', 'Unable to login!');
      }
      console.log(value);
    }, (reason) => {
      // rejection
      console.log(reason);
    });
  }
}
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);