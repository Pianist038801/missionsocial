import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  tabView: {},
  contents: { flex: 1 },
  content: {
    position: 'absolute',
  },
  tabBars: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class TabView extends Component {                             

  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    styles: PropTypes.object,
    tabs: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      component: PropTypes.element,
      onPress: PropTypes.func,
    })).isRequired,
    renderTabBar: PropTypes.func.isRequired,
    tabBarPosition: PropTypes.oneOf(['top', 'bottom']),
    index: PropTypes.number,
  }

  static defaultProps = {
    tabBarPosition: 'bottom',
    style: {},
    styles: {
      tabBar: {},
      content: {},
    },
    index: 0,
  }

  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      previousIndex: -1,
    };
  }

  render() {
    const content = (
      <View style={[styles.contents, this.props.styles.content]}>
        {this.props.tabs[this.state.index].component}
      </View>);
    const tabBar = (
      <View style={[styles.tabBars, this.props.styles.tabBar]}>
        {this.props.tabs.map((item, index) => (
          <TouchableWithoutFeedback
            key={`tabbar_${index}`}
            onPress={(event) => {
              this.setState({ index, previousIndex: this.state.index });
              if (item.onPress) { item.onPress(event, item, index); }
            }}>
            <View
              style={{ flex: 1 / this.props.tabs.length }}>
              {this.props.renderTabBar(this.state.index === index, item)}
            </View>
          </TouchableWithoutFeedback>))}
      </View>);
    if (this.props.tabBarPosition === 'top') {
      return (
        <View
          style={[styles.tabView, this.props.style]}>
          {tabBar}
          {content}
        </View>
      );
    }
    return (
      <View
        style={[styles.tabView, this.props.style]}>
        {content}
        {tabBar}
      </View>
    );
  }
}
