import React, { Component } from 'react';
import { View } from 'react-native';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { Icon, Metrics } from '@theme/';
import FeedNavigator from '@navigators/FeedNavigator';
import { setMainNavigator } from '@actions/route';

class Feeds extends React.Component {
  componentDidMount() {
    this.props.setMainNavigator(this.props.navigation);
    // this.props.dispatch({type:"GET_TEAM_LIST"});
  }
  render() {
    return (
      <FeedNavigator />);
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setMainNavigator: nav => dispatch(setMainNavigator(nav)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feeds);
