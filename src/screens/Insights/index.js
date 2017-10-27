import React from 'react';
import { TextInput, View } from 'react-native';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { Icon, Metrics } from '@theme/';
import { InsightNavigator } from '@navigators/InsightNavigator';
import { setMainNavigator } from '@actions/route';
import Empty from '@screens/Empty';

class Insights extends React.Component {

  componentDidMount() {
    this.props.setMainNavigator(this.props.navigation);
    // this.props.dispatch({type:"GET_TEAM_LIST"});
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 100 }}>
        <TextInput style={{ width: 300, backgroundColor: 'red' }} placeholder="sss" multiline />
      </View>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(Insights);
