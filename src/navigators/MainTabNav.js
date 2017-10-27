import React, { Component } from 'react';
import { View } from 'react-native';
import Login from '@screens/LoginScreen';
import Splash from '@screens/Splash';
import Feeds from '@screens/Feeds';
import Insights from '@screens/Insights';
import Posts from '@screens/Posts';
import Schedule from '@screens/Schedule';
import Settings from '@screens/Settings';

import { Styles, Images, Colors, Metrics, Fonts, Icons } from '@theme/';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainTabNav = TabNavigator(
  {
    feeds: {
      screen: Feeds,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name={'comments'}
            color={tintColor}
            size={Metrics.tabBarIconSize} />
          ),
      }, 
    },
    insight: {
      screen: Insights,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name={'bar-chart'}
            color={tintColor}
            size={Metrics.tabBarIconSize} />
        ),
      },
    },
    posts: {
      screen: Posts,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View style={{ ...Styles.center, width: Metrics.screenWidth / 5, height: Metrics.tabBarHeight, backgroundColor: 'rgb(100,100,100)' }}>
            <Icon
              name={'plus-circle'}
              color={tintColor}
              size={Metrics.tabBarIconSize} />
          </View>
        ),
      },
    },
    schedule: {
      screen: Schedule,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name={'calendar-o'}
            color={tintColor}
            size={Metrics.tabBarIconSize} />
        ),
      },
    },
    settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name={'cog'}
            color={tintColor}
            size={Metrics.tabBarIconSize} />
        ),
      },
    },
  },
  {
    initialRouteName: 'feeds',
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    swipeEnabled: false,
    animationEnabled: false,
    backBehavior: 'none',
    tabBarOptions: {
      activeTintColor: Colors.txtPink,
      inactiveTintColor: Colors.colGray,
      style: {
        backgroundColor: Colors.white,
        height: Metrics.tabBarHeight,
      },
      showLabel: false,
    },
  },
);
export default MainTabNav;
