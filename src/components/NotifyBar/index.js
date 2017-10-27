import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity, View, Modal, ScrollView, TouchableHighlight, Animated } from 'react-native';

import styles, { btnStyle, sheetStyle, hairlineWidth } from './styles';
import { Metrics, Images, Colors, Styles, Fonts } from '@theme/';
import {connect} from 'react-redux';
import {setData} from '@actions/globals';

let _this;
class NotifyBar extends Component {
   componentWillMount() {       
       this.props.ownProps.setRef(this)
   }
   componentWillUnmount() {
       this.props.ownProps.setRef(null)
   } 
  constructor(props) {
    super(props); 
    this.translateY = Metrics.navBarHeight;
    this.state = {
      visible: false,
      sheetAnim: new Animated.Value(-this.translateY),
    }; 
    this.myCallBack = this.myCallBack.bind(this);
    _this = this;
    this.show = this.show.bind(this);
  }

  myCallBack()   
  {
    this.props.setData({timeLimit: this.props.globals.data.timeLimit-1})
  }
  show(limit=100) {
     this.props.setData({timeLimit: limit})
    this.setState({ visible: true });
     this.intervalID = window.setInterval(this.myCallBack, 1000) 
    this._showSheet();
  }

  hide() {
    clearInterval(this.intervalID);
    this._hideSheet(() => {
      this.setState({ visible: false });
    }); 
  } 
  
  _showSheet() {
    Animated.timing(this.state.sheetAnim, {
      toValue: this.translateY,
      duration:200,
    }).start();
  }

  _hideSheet(callback) {
    Animated.timing(this.state.sheetAnim, {
      toValue: -this.translateY,
      duration: 200,
    }).start(callback || function() {});
  }
  
 
  render() { 
    const { visible, sheetAnim } = this.state;
    return (
        visible==true?( 
        <TouchableOpacity activeOpacity={1} style={{position: 'absolute',   left:0, top:0,}}>
          <Animated.View
            style={[{backgroundColor: this.props.bkColor},Styles.center, { height: this.translateY, transform: [{ translateY: sheetAnim }] }]}
          >
            <Text onPress={()=>this.hide()} style={{...Fonts.style.h4, width:Metrics.screenWidth, color: Colors.textPrimary, textAlign:'center'}}>
              Selling ends in {this.props.globals.data.timeLimit} sec.</Text>
          </Animated.View>
           
        </TouchableOpacity>
        )
        : null
    );
  }
}
  
NotifyBar.defaultProps = {
  tintColor: Colors.textPrimary,
  bkColor: 'red',
  title: 'NOTIFICATIONS',
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setData: dat=>dispatch(setData(dat)) ,
  };
}     

function mapStateToProps(state, ownProps) {
  const globals = state.get('globals');
  const navigator = state.get('routes');
  return { globals, navigator, ownProps};
}

export default connect(mapStateToProps, mapDispatchToProps)(NotifyBar); 