import React, { Component, PropTypes } from 'react';
import { Text, View, Modal, ScrollView, TouchableOpacity, TouchableHighlight, Animated } from 'react-native';

import styles, { btnStyle, sheetStyle, hairlineWidth } from './styles';
import { Metrics, Images, Colors, Styles } from '@theme/';
import CommonWidgets from '@components/CommonWidgets';
const TITLE_H = 40;
const CANCEL_MARGIN = 6;
const BUTTON_H = 50 + hairlineWidth;
const WARN_COLOR = '#ff3b30';
const MAX_HEIGHT = Metrics.screenHeight * 0.7;

let _this;
class BuySquare extends Component {
  onBtnFocus(value) {
    let i;
    for (i = 0; i <= value; i++) { this.setState({ [`Focus${i}`]: true }); }
    for (i = value + 1; i < 10; i++) { this.setState({ [`Focus${i}`]: false }); }
  }
  constructor(props) {
    super(props);

    this.scrollEnabled = false;
    this.translateY = this._calculateHeight();
    this.state = {
      Focus1: false,
      Focus2: false,
      Focus3: false,
      selected: 0,
      visible: false,
      sheetAnim: new Animated.Value(this.translateY),
    };
    this._cancel = this._cancel.bind(this);
    _this = this;
  }
  _calculateHeight() {
    return 200;
  }
     
  onBox = (val) =>
  {
      let i; 
      console.log(val);
      for(i =1; i<4; i ++) this.setState({[`Focus${i}`]: false});
      this.setState({[`Focus${val}`]: true, selected:val});
  }
  _render3Box()
  {
    console.log(this.state.Focus1); 
    return(
      <View style={{flexDirection: 'row', height:100, backgroundColor: Colors.brandPrimary, justifyContent: 'space-around', alignItems: 'center'}}>
        {
           [1,5,10].map((data, ind) => { 
                return (
                  ( CommonWidgets.renderSquareBox(this.state[`Focus${ind+1}`], data, ()=>this.onBox(ind+1)
          ))
          )})
          }
      </View>

    )
  }
  show() {
    this.setState({ visible: true });
    this._showSheet();
  }

  hide(index) {
    this._hideSheet(() => {
      this.setState({ visible: false });
    });
  }

  _cancel() {
 
      this._hideSheet(() => {
        this.setState({ visible: false });
      });
  }

  _showSheet() {
    Animated.timing(this.state.sheetAnim, {
      toValue: 0,
      duration: 250,
    }).start();
  }

  _hideSheet(callback) {
    Animated.timing(this.state.sheetAnim, {
      toValue: this.translateY,
      duration: 150,
    }).start(callback || function() {});
  }
 

  _renderReviewButton()
  {
    return(
       <TouchableOpacity
          activeOpacity={0.5} 
          style={[btnStyle.wrapper,   { marginTop: 0, height:50, backgroundColor: Colors.textBlue }]}
          onPress={()=>this.props.onPress(this.state.selected)}
        >
          <Text style={[btnStyle.title, { fontWeight: '700', color: Colors.brandSecondary }]}>
            REVIEW ORDER
          </Text>
        </TouchableOpacity>
    )
  }
   

  render() {
    const { visible, sheetAnim } = this.state;
    return (
      <Modal
        visible={visible}
        transparent
        animationType="none"
        onRequestClose={() => {}}
      >
        <View style={sheetStyle.wrapper}>
          <Text style={styles.overlay} onPress={this._cancel} />
          <Animated.View
            style={[sheetStyle.bd, { height: this.translateY, transform: [{ translateY: sheetAnim }] }]}
          >
            {CommonWidgets.renderSquareBottomBar(1800)} 
            {this._render3Box()}
            {this._renderReviewButton()}
          </Animated.View>
        </View>
      </Modal>
    );
  }
}


BuySquare.propTypes = {
  title: PropTypes.string, 
  tintColor: PropTypes.string,
  cancelButtonIndex: PropTypes.number,
  destructiveButtonIndex: PropTypes.number,
  onPress: PropTypes.func,
};


BuySquare.defaultProps = {
  tintColor: '#007aff',
  onPress: () => {},
};


export default BuySquare;