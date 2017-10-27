import React from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { Icon, Metrics } from '@theme/';
import  ScheduleNavigator from '@navigators/ScheduleNavigator';
import { setMainNavigator } from '@actions/route';   
class Schedule extends React.Component {
 
  componentDidMount() {
    this.props.setMainNavigator(this.props.navigation);
    // this.props.dispatch({type:"GET_TEAM_LIST"});
  }
  render() {
    return (
      <ScheduleNavigator />);     
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

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
