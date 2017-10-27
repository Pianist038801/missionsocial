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
    this.state = { st: 1,
    };
  }
  componentWillMount() {
    this.props.setFeedNavigator(this.props.navigation);
  }

  render() {
    var item1={
      "type": "photo",
      "message": "Brighten up your mornings in the Windy City with a 3 night getaway at Trump International Hotel & Tower Chicago and receive a complimentary 4th night: bit.ly/2wEkczr",
      "story": "The Trump Organization is at Trump International Hotel & Tower Chicago.",
      "created_time": "2017-08-23T14:20:39+0000",
      "link": "https://www.facebook.com/Trump/photos/a.888466537925701.1073741828.786883751417314/1238289609610057/?type=3",
      "full_picture": "https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/21032790_1238289609610057_8318481208038552756_n.jpg?oh=af4105b9fd9e3752db4bffe5e4833c88&oe=5A27575B",
      "from": {
          "name": "The Trump Organization",
          "picture": {
              "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/13754107_872012722904416_7807926512644528569_n.jpg?oh=e6f6e58e114adbd2cf90af9eba36a9d2&oe=5A2D3165"
              }
          },
          "id": "786883751417314"
      },
      "id": "786883751417314_1238289986276686"
    };
    var item2={
      "type": "video",
      "message": "#PropertyOfTheDay: Newly renovated, never lived-in New York City condo on the corner of Central Park South and 6th Avenue Trump International Realty bit.ly/2impWZ0",
      "story": "The Trump Organization is at Trump International Realty.",
      "created_time": "2017-08-22T14:07:09+0000",
      "link": "https://www.facebook.com/Trump/videos/1237296646376020/",
      "full_picture": "https://scontent.xx.fbcdn.net/v/t15.0-10/s720x720/21077869_1237297273042624_4816082863503966208_n.jpg?oh=66437c1d4d92a3ff6125bf2b665d8121&oe=5A256876",
      "from": {
          "name": "The Trump Organization",
          "picture": {
              "data": {
                  "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/13754107_872012722904416_7807926512644528569_n.jpg?oh=e6f6e58e114adbd2cf90af9eba36a9d2&oe=5A2D3165"
              }
          },
          "id": "786883751417314"
      },
      "source": "https://vjs.zencdn.net/v/oceans.mp4",
      "id": "786883751417314_1237296646376020"
    };
    return (
      <View style={{flex:1}}>
         
        <NavigationBar
          statusBar={{style: 'light-content',tintColor:'black'}}                                                  
          style={Styles.nav} 
          title={CommonWidgets.renderNavBarHeader('Feed')}
          tintColor={Colors.brandSecondary}
          leftButton={CommonWidgets.renderNavText('Edit', () => {this.props.navigation.navigate('filter_feed')})} />
      <KeyboardAwareScrollView
        style={{ flex: 1,height: Metrics.innerHeight, padding: Metrics.defaultMargin, backgroundColor: Colors.brandSecondary }}
        automaticallyAdjustContentInsets={false}> 
           {CommonWidgets.renderFBFeed(item1, this.props.navigation)}
           {CommonWidgets.renderFBFeed(item2)} 
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
