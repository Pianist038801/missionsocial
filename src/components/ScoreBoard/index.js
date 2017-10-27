import React, { Component } from 'react';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { Image, View, Text, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';
import CommonWidgets from '@components/CommonWidgets';
import Utils from '@src/utils';
import CT from '@src/constants';
import { Styles, Colors, Metrics, Fonts } from '@theme/';

class ScoreBoard extends Component {
  static defaultProps = {
    img1: CT.AVATAR_PLACEHOLDER,
    img2: CT.AVATAR_PLACEHOLDER,
    team1: 'FOLSOM',
    team2: 'DEL ORO',
    stadium: 'Folsom High School Stadium', 
    date: 'MONDAY, June 20th',
    time: '6:00 PM',
    score1: -1,
    score2: -1,
    round: 2,
    roundscore1: [23,2,-1,-1],
    roundscore2: [12,23,2,2],
  };
  
  constructor(props)
  {
    super(props);
    let game= props.game;
    this.state = {img1: game.team1.avatarUri,
    img2: game.team2.avatarUri,
    team1: game.team1.teamname,
    team2: game.team2.teamname,
    stadium: game.team1.teamname + ' High School Stadium',
    date: Utils.getDateString(game.date),
    time: Utils.getTimeString(game.hour, game.minute),
    score1: game.score1,
    score2: game.score2,
    round: game.round,
    roundscore1: Object.assign([],{},game.roundscore1),
    roundscore2: Object.assign([],{},game.roundscore2)};
  } 
  componentWillReceiveProps(props)
  { 
    let game= props.game;
    this.setState(  {img1: game.team1.avatarUri,
    img2: game.team2.avatarUri,
    team1: game.team1.teamname,
    team2: game.team2.teamname,
    stadium: game.team1.teamname + ' High School Stadium',
    date: Utils.getDateString(game.date),
    time: Utils.getTimeString(game.hour, game.minute),
    score1: game.score1,
    score2: game.score2,
    round: game.round,
    roundscore1: Object.assign([],{},game.roundscore1),
    roundscore2: Object.assign([],{},game.roundscore2)});
  }
  renderBlankBoard()
  {
    return(
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row',paddingLeft: Metrics.defaultMargin, paddingRight: Metrics.defaultMargin, backgroundColor: Colors.brandSecondary, borderBottomColor: 'black', justifyContent: 'space-between', alignItems: 'center'}}>
          <Image style={{resizeMode: 'stretch', width: Metrics.bigTeamIcon, height: Metrics.bigTeamIcon}} source={{uri: this.state.img1}}/>
          <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{...Fonts.style.h4, color: Colors.textSecondary}}>
              {this.state.date}
            </Text>
            <Text style={{...Fonts.style.h4, color: Colors.textSecondary}}>
              {this.state.time}
            </Text>
          </View>
          <Image style={{resizeMode: 'stretch', width: Metrics.bigTeamIcon, height: Metrics.bigTeamIcon}} source={{uri: this.state.img2}}/>
        </View>
        <View style={{...Styles.center, marginTop: -20}} >
          <Text style={{...Fonts.style.h6, color: Colors.textSecondary}}>
            {this.state.stadium}
          </Text>
        </View>
      </View>
    )
  }
  renderLiveBoard()
  {
    return( 
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row',padding: Metrics.defaultMargin, backgroundColor: Colors.brandSecondary, borderBottomColor: 'black',    alignItems: 'center'}}>
          <Image style={{resizeMode: 'stretch', width: Metrics.bigTeamIcon, height: Metrics.bigTeamIcon}} source={{uri: this.state.img1}}/>
          <View style={{flex:1, flexDirection: 'row',flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{...Fonts.style.h1,flex:1, textAlign: 'center', color: Colors.textPrimary}}>
              {this.state.score1}
            </Text>
            <Text style={{...Fonts.style.h4, flex:1, textAlign:'center', color: Colors.textSecondary}}>
              {this.state.round<=4?Utils.getRankString(this.state.round):'FINAL'} 
            </Text>
            <Text style={{...Fonts.style.h1, textAlign:'center',flex:1, color: Colors.textPrimary}}>
              {this.state.score2}
            </Text>
          </View>
          <Image style={{resizeMode: 'stretch', width: Metrics.bigTeamIcon, height: Metrics.bigTeamIcon}} source={{uri: this.state.img2}}/>
        </View>
        <View style={{...Styles.center, marginTop: -20}} >
          <Text style={{...Fonts.style.h6, color: Colors.textSecondary}}>
            {this.state.stadium}
          </Text>
        </View>
      </View>
    )
  }
  renderScore(){
    return(
      <View style={{backgroundColor: Colors.brandSecondary, flexDirection: 'column'}}>
        <View style={[styles.scorePan, ]}>
          <Text style={{...Fonts.style.h6, flex:2, textAlign: 'left', color: Colors.textSecondary}}>
            TEAMS
          </Text>
          <Text style={{...Fonts.style.h6, flex:1, textAlign: 'center', color: Colors.textSecondary}}>
            1ST
          </Text>
          <Text style={{...Fonts.style.h6, flex:1, textAlign: 'center', color: Colors.textSecondary}}>
            2ND
          </Text>
          <Text style={{...Fonts.style.h6, flex:1, textAlign: 'center', color: Colors.textSecondary}}>
            3RD
          </Text>
          <Text style={{...Fonts.style.h6, flex:1, textAlign: 'center', color: Colors.textSecondary}}>
            4TH
          </Text>
        </View>
        <View style={styles.scorePan}>
          <Text style={{...Fonts.style.h5, flex:2, textAlign: 'left', color: Colors.textPrimary}}>
            {this.state.team1}
          </Text> 
          {
            this.state.roundscore1!=null && ( 
             this.state.roundscore1.map((score, ind) =>  
                  (<View key={ind} style={styles.scoreCell}>
                    <Text style={{...Fonts.style.h5, textAlign: 'center', color: ind == this.state.round-1?Colors.textBlue:Colors.textSecondary}}>
                      {(ind < this.state.round-1)?score:(( ind == this.state.round-1)?'LIVE':' ')}
                    </Text>
                  </View>)
                )
              ) 
          }
        </View>
        <View style={styles.scorePan}>
          <Text style={{...Fonts.style.h5, flex:2, textAlign: 'left', color: Colors.textPrimary}}>
            {this.state.team2}
          </Text>
          {
            this.state.roundscore2!=null && ( 
             this.state.roundscore2.map((score, ind) =>  
                  (<View key={ind} style={styles.scoreCell}>
                    <Text style={{...Fonts.style.h5, textAlign: 'center', color: ind == this.state.round-1?Colors.textBlue:Colors.textSecondary}}>
                      {(ind < this.state.round-1)?score:((ind == this.state.round-1)?'LIVE':' ')}
                    </Text>
                  </View>)
                )
              ) 
          }
        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>     
        {this.props.game.round==0 ?
        this.renderBlankBoard():
        this.renderLiveBoard()}
        {this.renderScore()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  const globals = state.get('globals');
  return { globals };
}

export default connect(mapStateToProps, null)(ScoreBoard); 
