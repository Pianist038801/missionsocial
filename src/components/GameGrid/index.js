import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity, TouchableHighlight, Animated } from 'react-native';
 
import { Fonts, Metrics, Images, Colors, Styles } from '@theme/';
import CommonWidgets from '@components/CommonWidgets';
import {connect} from 'react-redux';
import Grid from 'react-native-grid-component';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  bd: {
    flex: 1,
    alignSelf: 'flex-end',
    backgroundColor: '#e5e5e5',
  },
  title: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titleText: {
    color: '#8f8f8f',
    fontSize: 12,
  },
  score:
    {...Fonts.style.h6, textAlign:'center', flex:1, color:Colors.textPrimary},
  options: {
  },
});

let _this;
class GameGrid extends Component {
  onBtnFocus(value) {
    let i;
    for (i = 0; i <= value; i++) { this.setState({ [`Focus${i}`]: true }); }
    for (i = value + 1; i < 10; i++) { this.setState({ [`Focus${i}`]: false }); }
  }
  constructor(props) {
    super(props);
    
    this.state = {
       score1: [0,0,0,0,0,0,0,0,0,0],
       score2: [0,0,0,0,0,0,0,0,0,0],
       gamenumber: props.gamenumber,
       gameid: props.gameid,
       team1: this.props.globals.data.gamelist[props.gameid].team1.teamname,
       team2: this.props.globals.data.gamelist[props.gameid].team2.teamname
    }; 
    this.key = 0;
    _this = this;
  }
  setSquare(nX, nY, val)
  {
    // var arr = Object.assign({},[],this.state.data);
    // arr[nY * 11 + nX] = val;
    // this.setState({data: arr});
  }
  renderScore1(){
    var cellArray=[];
    for(var i =1;i<11; i++)
      cellArray.push(i);
    
    return(
      <View style={{flexDirection: 'row', width:Metrics.gridCell*11, paddingLeft: Metrics.gridCell}}>
        {
          cellArray.map((val, key)=>(<Text key={key} style={styles.score}>{this.props.globals.data.gamedata[`score1_${val}`]}</Text>))
        }
      </View>
    )
  }
  renderScore2(){
    var cellArray=[];
    for(var i =1;i<11; i++)
      cellArray.push(i);
     
    return(
        <View style={{flexDirection: 'column', alignItems:'flex-end', height:Metrics.gridCell*10}}> 
        { 
          cellArray.map((val, key)=>(<Text key={key} style={[styles.score, {width: Metrics.gridCell, textAlign:'right'}]}>{this.props.globals.data.gamedata[`score2_${val}`]}</Text>))
        }
      </View>
    )
  }
  renderTeam1()
  {
    var i=0, a=[];
    for(i=0; i< this.state.team1.length; i++)
      a.push(this.state.team1.charAt(i));
    return(
        <View style={{...Styles.center,flexDirection: 'row', width:Metrics.gridCell*12, height: Metrics.gridCell}}>
            {a.map((letter,ind) => {return(
              <Text key={ind} style={{...Fonts.style.h6,  color:Colors.textPrimary}}>
                {letter}
              </Text>)
              })}
        </View>
    )
  }
  renderTeam2()
  {
    var i=0, a=[];
    for(i=0; i< this.state.team2.length; i++)
      a.push(this.state.team2.charAt(i));
    return(
        <View style={{width: Metrics.gridCell, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: Metrics.gridCell*10}}>
            {a.map((letter,ind) => {return(
              <Text key={ind} style={{...Fonts.style.h6,  marginLeft:3, color:Colors.textPrimary}}>
                {letter}
              </Text>)
              })
            }
        </View>
    )
  }
  
  onBox = (val) =>
  {
      let i; 
      console.log(val);
      for(i =1; i<4; i ++) this.setState({[`Focus${i}`]: false});
      this.setState({[`Focus${val}`]: true, selected:val});
  }
  
  renderGridCell(key)
  {
   
     
    let cellData = this.props.globals.data.gamedata[(this.state.gamenumber-1)*100+ key];
    console.log(cellData);
    return(
      <TouchableOpacity key={key} onPress={()=>this.props.onPress((this.state.gamenumber-1)*100+ key)}>
        <View style={{...Styles.center, borderColor: Colors.brandPrimary, borderWidth:1, width: Metrics.gridCell, height:Metrics.gridCell}}>
          {
            cellData==this.props.globals.userInfo.userId?
            (CommonWidgets.renderCircle())
            :(
              cellData==0? 
              null:
              (CommonWidgets.renderCircle(Colors.brandPrimary))
            )
          }
        </View>
      </TouchableOpacity>        
    )
  }
   

  render() {
    const { visible, sheetAnim } = this.state;
    var cellArray=[],tempArray=[]; 
    for(var i =1;i<101; i++)
    { 
      tempArray.push(this.renderGridCell(i))
      if(i%10==0) {  cellArray.push(<View key={i} style={{flexDirection:'row'}}>{tempArray}</View>); tempArray = [];}
 
    }
    
    return (
      <View style={{width: Metrics.gridCell * 12}}>
       <Text style={{...Fonts.style.h3, marginLeft: Metrics.gridCell, color: Colors.textSecondary,marginVertical: 10}}>GAME{this.state.gamenumber}</Text>
       <View style={{...this.props.style,width: Metrics.gridCell * 12, height: Metrics.gridCell * 12, backgroundColor: Colors.brandSecondary}}>
          
          {this.renderScore1()}
          <View style={{flexDirection: 'row'}}>
            {this.renderScore2()}
           <View style={{   width: Metrics.gridCell* 10, height:Metrics.gridCell*10 }}>
            {cellArray}
            </View> 
            {this.renderTeam2()} 
          </View>
          {this.renderTeam1()}
       </View>
       </View>
    );
  }
}

GameGrid.propTypes = {
  title: PropTypes.string, 
  tintColor: PropTypes.string,
  cancelButtonIndex: PropTypes.number,
  destructiveButtonIndex: PropTypes.number,
  onPress: PropTypes.func,
};


GameGrid.defaultProps = {
  tintColor: '#007aff',
  onPress: () => {},
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setGamesNavigator: homeNavigator => dispatch(setGamesNavigator(gamesNavigator)),
  };
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  const navigator = state.get('routes');
  return { globals, navigator};
}

export default connect(mapStateToProps, mapDispatchToProps)(GameGrid);