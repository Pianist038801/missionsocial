import React, { Component } from 'react';
import { BackAndroid, Platform, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import { Colors } from '@theme/';
import { StackNavigator } from 'react-navigation';
import Splash from '@screens/Splash';
import Login from '@screens/LoginScreen';
import MainTab from '@screens/MainTab';
import Feeds from '@screens/Feeds';
const AppNavigator = StackNavigator({
  splash: { screen: Splash },
  login: { screen: Login },
  main: { screen: MainTab },
}, {
  initialRouteName: 'splash',
  navigationOptions: {
    header: null,
    cardStack: { gesturesEnabled: false },
  },
  headerMode: 'screen',
  lazyLoad: true,
});
export default AppNavigator;
