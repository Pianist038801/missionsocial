import MainTabNav from '@navigators/MainTabNav';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class MainTab extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainTabNav />
      </View>);
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    // setMainNavigator: nav=>dispatch(setMainNavigator(nav)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTab);
