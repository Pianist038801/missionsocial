import React from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { Icon, Metrics } from '@theme/';
import { FeedNavigator } from '@navigators/FeedNavigator';
import { setMainNavigator } from '@actions/route';
import Empty from '@screens/Empty';
import  SettingsNavigator from '@navigators/SettingsNavigator'; 
class Settings extends React.Component {
 
  componentDidMount() {
    this.props.setMainNavigator(this.props.navigation);
    // this.props.dispatch({type:"GET_TEAM_LIST"});
  }
  render() {
    return (
      <SettingsNavigator />);
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
