import React from 'react';
import {
  Platform,
  View,
  Text,
  StatusBar,
  Image,
  Animated,
  Alert,
  ImageBackground,
  TouchableOpacity } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import I18n from 'react-native-i18n';
import CT from '@src/constants';
import { Metrics, Styles, Icons, Colors, Fonts, Images } from '@theme/';
import Utils from '@src/utils';
import styles from './styles';
import Video from 'react-native-video';
import Modal from 'react-native-root-modal';
import {Avatar, SocialIcon} from 'react-native-elements';  
import Switch from 'react-native-switch-pro'
const CommonWidgets = {

  renderTeamItem(teamInfo, onPressTeam = () => { Alert.alert('team'); }, onPressPlus = () => { Alert.alert('plus'); }, isFavorite = false) {
    const avatar = teamInfo.avatarUri;
    const teamname = teamInfo.teamname;
    const cityname = teamInfo.cityname;
    return (
      <TouchableOpacity key={teamInfo.userId} onPress={() => onPressTeam(teamInfo.userId)} style={{ flexDirection: 'row', paddingLeft: Metrics.defaultMargin, paddingRight: Metrics.defaultMargin, backgroundColor: Colors.brandPrimary, borderBottomColor: 'black', borderBottomWidth: 3, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ ...Styles.center, flex: 1 }}>
          <Image style={{ resizeMode: 'stretch', width: Metrics.smallTeamIcon * 1.5, height: Metrics.smallTeamIcon * 1.5 }} source={{ uri: avatar }} />
        </View>
        <View style={{ flexDirection: 'row', flex: 5, alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Text style={{ ...Fonts.style.h3, color: Colors.textPrimary, margin: Metrics.defaultMargin }}> {teamname}</Text>
            <Text style={{ ...Fonts.style.h4, color: Colors.textSecondary, margin: Metrics.defaultMargin }}> {cityname}</Text>
          </View>
          <TouchableOpacity onPress={() => onPressPlus(teamInfo.userId)}>
            <Image style={{ resizeMode: 'stretch', width: Metrics.smallTeamIcon * 1, height: Metrics.smallTeamIcon * 1 }} source={isFavorite == true ? Images.checkIcon : Images.plusIcon} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  },
  renderAvatar(userUri='https://facebook.github.io/react/img/logo_og.png', socialType='facebook')
  { 
    return(
      <View style={{ width: Metrics.avatarSize,   height: Metrics.avatarSize}}>
        <View style={{ width: Metrics.avatarSize,   height: Metrics.avatarSize, borderRadius: Metrics.avatarSize/2, borderColor: Colors.colGray, borderWidth:1}}>
          <Avatar
          width={Metrics.avatarSize-2} height={Metrics.avatarSize-2}    
          rounded
          avatarStyle={{borderColor:'white',borderWidth:2, borderRadius:Metrics.avatarSize/2 - 1}}
          source={{uri: userUri}}
          activeOpacity={0.7}
          >
          </Avatar>
        </View>
        <SocialIcon type={socialType} style={{ width:Metrics.iconSize , height:Metrics.iconSize, position:'absolute',borderWidth: 2, borderColor:'white', borderRadius:Metrics.iconSize/2,  bottom:-6, right:-6 - Metrics.iconSize/5}}  iconSize={Metrics.iconSize/2}  />
    </View>);
  },
  renderAvatarPlaceholder()
  {
    return(
      <View style={{ width: Metrics.avatarSize,   height: Metrics.avatarSize}}>
        <View style={{ width: Metrics.avatarSize,   height: Metrics.avatarSize, borderRadius: Metrics.avatarSize/2, borderColor: Colors.colGray, borderWidth:1}}>
          <View style={{ width: Metrics.avatarSize-2,   height: Metrics.avatarSize-2, backgroundColor: Colors.colGray, borderRadius: Metrics.avatarSize/2 -1, borderColor: Colors.white, borderWidth:1}}>
          </View>
        </View> 
        <Icon type='font-awesome'  size={Metrics.iconSize} containerStyle={Styles.center} style ={{backgroundColor: 'transparent',position:'absolute',  bottom: 0, right: 0,}} name='question-circle' />
    </View>);
  },
  
  renderDivider(color = Colors.white, width = Metrics.screenWidth * 2 / 3, height = 1) {
    return (
      <View style={{ backgroundColor: color, width, height }} />
    );
  },
  renderHorzDivider(color=Colors.colGray,width=1, height=Metrics.iconSize*2){
    return(
      <View style={{ marginHorizontal: Metrics.iconSize, backgroundColor: color, width, height }} />
    )
  },
  renderStatusBar(color) {
    if (Platform.OS === 'android') {
      return (
        <StatusBar
          backgroundColor={color}
          barStyle={'light-content'}
          translucent />
      );
    }
    return (
      <View style={{ height: 20,   backgroundColor: Colors.brandPrimary }}>
        <StatusBar
          backgroundColor={color}
          barStyle={'light-content'}
          translucent />
      </View>
    );
  },
  renderNavBarHeader(headerText, color=Colors.textPrimary) {
    return (
      <View style={Styles.center}>
        <Text
          style={[Fonts.style.h3,
            { textAlign: 'center',
              width: Metrics.screenWidth * 0.7,
              color: color }]}
          numberOfLines={1}>
          {headerText}
        </Text>
      </View>
    );
  },
  renderSpacer(count, color = 'transparent') {
    return (
      <View style={{ height: count, backgroundColor: color }} />
    );
  },
  _renderSpacer(count) {
    return (
      <View style={{ height: (Metrics.screenHeight / 40) * count }} />
    );
  },


  renderMaterialButton(text, color, onPress, loading = false) {
    return (
      <TouchableOpacity
        style={[Styles.button, { backgroundColor: color }]}
        onPress={!loading ? onPress : null}>
        {!loading ?
          <Text style={Fonts.style.buttonText}>
          {text}
        </Text> :
        <ActivityIndicator
            color={Colors.textPrimary} />}
      </TouchableOpacity>
    );
  },
  renderKickOffButton(text, color, onPress, loading = false) {
    return (
      <View style={{ ...Styles.center, backgroundColor: Colors.brandPrimary, width: Metrics.screenWidth, paddingVertical: 30 }}>
        <TouchableOpacity
          style={[Styles.button, { borderRadius: 5, backgroundColor: color }]}
          onPress={!loading ? onPress : null}>
          {!loading ?
            <Text style={{ ...Fonts.style.buttonText, color: 'black' }}>
              {text}
            </Text> :
            <ActivityIndicator
              color={Colors.textPrimary} />}
        </TouchableOpacity>
      </View>
    );
  },

  renderMaterialButton1(text, color, onPress) {
    return (
      <MKButton
        style={Styles.button}
        backgroundColor={color}
        onPress={onPress}>
        <Text style={Fonts.style.buttonText}>
          {text}
        </Text>
      </MKButton>
    );
  },
  renderAddButton(text, color, onPress) {
    return (
      <TouchableOpacity
        style={[Styles.center,
          { width: Metrics.screenWidth * 0.15, backgroundColor: color, position: 'absolute', right: 0, bottom: 0, borderRadius: 3 }]}
        backgroundColor={color}
        onPress={onPress}>
        <Text style={[Fonts.style.h6, { color: Colors.textPrimary }]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  },
  renderCloseButton(onPress) {
    return (
      <TouchableOpacity
        style={{ position: 'absolute', left: 20, top: Platform.OS === 'android' ? 25 : 30 }}
        onPress={onPress}>
        <Icon name="times" size={20} color={Colors.textPrimary} />
      </TouchableOpacity>
    );
  },

  renderWeekbar(onLeftPress, onRightPress, numWeek) {
    return (
      <View style={{ borderBottomColor: 'black', paddingHorizontal: Metrics.defaultMargin, borderBottomWidth: 3, flexDirection: 'row', backgroundColor: Colors.brandSecondary, alignItems: 'center', justifyContent: 'space-between' }}>
        {numWeek > 1 ? this.renderIcon(onLeftPress, 'angle-left') : this.renderIcon(() => {}, 'angle-left')}
        <Text
          style={[Fonts.style.h4,
            { textAlign: 'center',
              width: Metrics.screenWidth * 0.7,
              color: Colors.textSecondary }]}>
            Week{' '}{numWeek}
        </Text>
        {this.renderIcon(onRightPress, 'angle-right')}
      </View>
    );
  },
  renderSquareBox(borderColor = false, cnt, onPress = () => {}) {
    borderColor = (borderColor == false) ? (Colors.brandSecondary) : (Colors.textBlue);

    return (
      <TouchableOpacity onPress={() => onPress(cnt)} key={cnt}>
        <View style={{ borderColor, height: 100, alignItems: 'center', justifyContent: 'center', borderWidth: 1, backgroundColor: Colors.brandSecondary }}>
          <Text style={{ ...Fonts.style.h3, color: Colors.textPrimary }}>
            {cnt}
          </Text>
          <Text style={{ ...Fonts.style.h4, color: Colors.textSecondary }}>
            SQUARES
          </Text>
          <Text style={{ ...Fonts.style.h2, color: Colors.textPrimary }}>
            ${6 * cnt}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },
  renderGridCell(onPress, key) {
    return (
      <TouchableOpacity onPress={() => {}} />


    );
  },
  renderSquareBottomBar(total, onPlay = null) {
    return (
      <View style={{ alignItems: 'center', height: 50, flexDirection: 'row', backgroundColor: 'rgb(40,40,49)' }}>
        <Text style={{ ...Fonts.style.h1, textAlign: 'center', flex: 1, color: Colors.textSecondary }}>
              $
              <Text style={{ ...Fonts.style.h2, textAlign: 'center', color: Colors.textPrimary }}>
                {total}
              </Text>
        </Text>
        <Text style={{ ...Fonts.style.h7, textAlign: 'center', flex: 1, color: Colors.textSecondary }}>
              TOTAL WINNINGS
          </Text>
        {onPlay == null ? null : (
          <TouchableOpacity onPress={onPlay} style={{ ...Styles.center, flex: 1, height: 50, backgroundColor: Colors.textBlue }}>
            <Text style={{ ...Fonts.style.h1, color: Colors.brandPrimary, textAlign: 'center' }}>
                PLAY
              </Text>
          </TouchableOpacity>)}
      </View>
    );
  },
  renderTabBarItem(text, isActive) {
    return (
      <View
        style={[Styles.center, {
          backgroundColor: Colors.brandPrimary,
          height: Metrics.tabBarHeight,
          borderColor: isActive ? Colors.textBlue : Colors.brandSecondary,
          borderBottomWidth: 2 }]}>
        <Text
          style={[Fonts.style.listItemTextDefault,
            { color: isActive ? Colors.textPrimary : Colors.textSecondary, fontSize: Fonts.size.h5 }]}>
          {text}
        </Text>
      </View>
    );
  },
  renderNavText(text, onPress, color=Colors.txtPink) {
    return (
      <View style={{marginBottom: 8}}> 
      <TouchableOpacity
        style={Styles.center}
        onPress={onPress}>
        <Text style={[Fonts.style.h4, { textAlign:'center',   color: color}]}>
          {text}
        </Text>
      </TouchableOpacity> 
      </View>
    );
  },
  renderTextButton(text, color, onPress) {
    return (
      <TouchableOpacity
        style={[Styles.center,
          { width: Metrics.screenWidth * 0.2, margin: 20, backgroundColor: color, borderRadius: 3 }]}
        backgroundColor={color}
        onPress={onPress}>
        <Text style={[Fonts.style.h3, { color: Colors.textPrimary }]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  },
  renderConfirmDlg(text, visibility, scale, translateX, hideModal) {
    return (
      <Animated.Modal
        visible={visibility}
        style={[Styles.modal, { transform: [{ scale }, { translateX }] }]} >

        <View style={styles.modalContainer}>
          <View style={{ padding: Metrics.defaultPadding }}>
            <View style={{ ...Styles.center, flexDirection: 'column' }}>
              <View style={{ ...Styles.center, flex: 1 }}>
                <Text style={{ ...Fonts.style.h3, alignSelf: 'center', color: Colors.textPrimary, flex: 1 }}>
                  {text}
                </Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                {this.renderTextButton('OK', Colors.textBlue, () => hideModal(1))}
                {this.renderTextButton('Cancel', Colors.textBlue, () => hideModal(0))}
              </View>
            </View>
          </View>
        </View>
      </Animated.Modal>
    );
  },
  renderCountDown(secVal, buyLimit, onStart, onIncreaseBuytime) {
    let sec = secVal % 60;
    if (sec < 10) sec = `0${sec}`;
    const mins = secVal / 60;
    let min = parseInt(mins);
    if (min < 10) min = `0${min}`;

    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: Metrics.defaultMargin, paddingVertical: Metrics.defaultMargin, borderRadius: 5, borderWidth: 1, borderColor: Colors.textPrimary }}>
        <View style={{ ...Styles.center, flex: 1, flexDirection: 'column' }}>
          <Text style={{ ...Fonts.style.h3, color: Colors.textPrimary }}>Time</Text>
          <Text style={{ ...Fonts.style.h3, color: Colors.textPrimary }}>{min}:{sec}</Text>
        </View>
        <View style={{ ...Styles.center, backgroundColor: Colors.textBlue, flex: 1 }}>
          <TouchableOpacity
            style={{ backgroundColor: Colors.textBlue }}
            onPress={onStart}>
            <Text style={{ ...Fonts.style.h2, color: Colors.textPrimary }}>
                  START
                </Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...Styles.center, flex: 1, flexDirection: 'column' }}>
          <Text style={{ ...Fonts.style.h3, flex: 1, color: Colors.textPrimary }}>Buy Time</Text>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            {this.renderIcon(onIncreaseBuytime, 'arrow-up', 20)}
            <Text style={{ ...Fonts.style.h3, color: Colors.textPrimary }}> {buyLimit} min</Text>
          </View>
        </View>
      </View>
    );
  },
  renderFilterFeedItem(item=2)
  {
    item.name=`${item.name}${item.socialType}`;
    return(
      <View style={{flexDirection: 'column'}}>
        <Text style={{ ...Fonts.style.h6,   marginVertical: Metrics.defaultMargin, color: Colors.textPrimary }}>{item.name}</Text>
        <View style={{flexDirection: 'row', backgroundColor: Colors.white, marginBottom:1, padding: Metrics.defaultMargin, justifyContent: 'space-between'}}>
          <Text style={{ ...Fonts.style.h4,   color: Colors.textPrimary }}>Timeline</Text>
          <Switch
            value={true}
            onSyncPress={value => {}}
            backgroundInactive={Colors.colPink}
          />
        </View>
        <View style={{flexDirection: 'row', backgroundColor: Colors.white, marginBottom:1, padding: Metrics.defaultMargin, justifyContent: 'space-between'}}>
          <Text style={{ ...Fonts.style.h4,   color: Colors.textPrimary }}>Scheduled</Text>
          <Switch
            value={true}
            onSyncPress={value => {}}
            backgroundInactive={Colors.colPink}
          />
        </View>

      </View>
    )
  },
  renderScheduleItem(item, onPress)
  {
    let userUri='item.userUri';
    let socialType = 'twitter'
    let username='item.username';
    return( 
      <View style={{flexDirection:'column'}}>
        <View style={{padding: Metrics.defaultMargin, backgroundColor: Colors.white, flexDirection: 'row', alignItems: 'center'}}>
          {this.renderAvatar(userUri, socialType)}
          <Text style={{ ...Fonts.style.h5,   marginLeft: 10 , color: Colors.textPrimary }}>{'Timeline'}</Text>  
          <TouchableOpacity onPress={onPress} style ={{ position: 'absolute', right: Metrics.defaultMargin,  }}>
            <Icon type='font-awesome' name='angle-right' size={25} color={Colors.txtPink}/>
          </TouchableOpacity>  
        </View> 
        {this.renderSpacer(1, Colors.colGray)}
        <View style={{padding: Metrics.defaultMargin, backgroundColor: Colors.white, flexDirection: 'row', alignItems: 'center'}}> 
          <Text style={{ ...Fonts.style.h5,    color: Colors.textSecondary }}>{'Bla bla bla bla bla bla blabl bla bla bla bla bla lbablalbla  '}</Text>   
        </View> 
        {this.renderSpacer(2, Colors.colGray)}
      </View>)
  },
  renderSettingsItem(text, onPress){
    return(
      <TouchableOpacity onPress={onPress} style={{flexDirection: 'row', alignItems: 'center',backgroundColor: Colors.white, marginBottom:1, padding: Metrics.defaultMargin, justifyContent: 'space-between'}}>
        <Text style={{ ...Fonts.style.h4,   color: Colors.textPrimary }}>{text}</Text>
        <Icon type='font-awesome' name='angle-right' size={25} color={Colors.txtPink} style ={{ position: 'absolute', right: Metrics.defaultMargin,  }}/>
      </TouchableOpacity>   
    )
  },
  renderSelectFeed()
  {
    let userUri='item.userUri';
    let socialType = 'facebook'
    let username='item.username';
    return( 
    <View style={{flexDirection:'column'}}>
      <View style={{padding: Metrics.defaultMargin, backgroundColor: Colors.white, flexDirection: 'row', alignItems: 'center'}}>
        {this.renderAvatar(userUri, socialType)}
        <Text style={{ ...Fonts.style.h5,   marginLeft: 10 , color: Colors.textPrimary }}>{'Timeline'}</Text>  
        <View style ={{ position: 'absolute', right: Metrics.defaultMargin,  }}>
          <Switch
            value={true}
            onSyncPress={value => {}}
            backgroundInactive={Colors.colPink}
          />
        </View>  
      </View> 
      {this.renderSpacer(1, Colors.colGray)}
    </View>)
  },
  renderFeedItem(item=2)
  {
    let userUri='item.userUri';
    let socialType = 'facebook'
    let username='item.username';
    return( 
    <View style={{flexDirection:'column'}}>
    <View style={{padding: Metrics.defaultMargin, backgroundColor: Colors.white, flexDirection: 'row', alignItems: 'center'}}>
      {this.renderAvatar(userUri, socialType)}
      <View style={{flexDirection: 'column', alignItems:'flex-start', marginLeft:10}}>
        <Text style={{ ...Fonts.style.h5,   color: Colors.textPrimary }}>{'Timeline'}</Text>
        <Text style={{ ...Fonts.style.h6,   color: Colors.textSecondary }}>{username}</Text>
      </View> 
      <View style ={{ position: 'absolute', right: Metrics.defaultMargin,  }}>
        <Switch
          value={true}
          onSyncPress={value => {}}
          backgroundInactive={Colors.colPink}
        />
      </View> 
      
    </View> 
    {this.renderSpacer(1, Colors.colGray)}
    </View>)
  },
  renderPostResultItem(onEditPost=()=>{},success=true)
  {
    let userUri='item.userUri';
    let socialType = 'facebook'
    let username='item.username';
    return( 
    <View style={{flexDirection:'column'}}>
    <View style={{padding: Metrics.defaultMargin, backgroundColor: Colors.white, flexDirection: 'row', alignItems: 'center'}}>
      {this.renderAvatar(userUri, socialType)}
      <View style={{flexDirection: 'column', alignItems:'flex-start', marginLeft:10}}>
        <Text style={{ ...Fonts.style.h5,   color: Colors.textPrimary }}>{'username'}</Text>
        <TouchableOpacity onPress={onEditPost}>
          <Text style={{ ...Fonts.style.h6,   color: Colors.txtPink }}>Edit Post</Text>
        </TouchableOpacity>
      </View> 
      <View style ={{ position: 'absolute', right: Metrics.defaultMargin,  }}>
        {success?
        <Icon 
          name='check-circle'
          color={Colors.colGreen}
          size={25}
        />
        :
        <IonIcon 
          name='ios-close-circle'
          color={Colors.colPink}
          size={25}
        />
        }
      </View> 
      
    </View> 
    {this.renderSpacer(1, Colors.colGray)}
    </View>)
  },
  renderSocialButton(socialType, onPress=()=>{})
  {
    return(
      <TouchableOpacity activeOpacity={0.9} onPress={()=>onPress(socialType)} style={{flex:1, marginBottom:1, flexDirection: 'row', alignItems: 'center',}}>
            <View style={{width:Metrics.socialBtnSize, height: Metrics.socialBtnSize, alignItems:'center', justifyContent: 'center', backgroundColor: Utils.getSocialColor(socialType)}}>
            <Icon name={socialType} color='white' size={Metrics.socialIconSize}/>
            </View>
            <View style={{flex:1, height: Metrics.socialBtnSize, justifyContent: 'center',  marginLeft: 1, padding: Metrics.defaultMargin, backgroundColor: Utils.getSocialColor(socialType) }}>
              <Text style={{...Fonts.style.h4 , color:Colors.white}}>
                  Connect with {Utils.getSocialText(socialType)}
              </Text>
            </View>
      </TouchableOpacity>
    )
  },
  renderFBFeed(item, navigation) {
    let userUri = item.from.picture.data.url;
    let username = item.from.name;
    let socialType = 'facebook';
    const { message } = item;
    const secDiff = parseInt((new Date() - new Date(item.created_time)) / 1000);
    console.log(secDiff);
    return (
      <View key={item.id} style={{ backgroundColor: Colors.white }}>
        <View style={{padding: Metrics.defaultMargin, flexDirection: 'row', alignItems: 'center'}}>
          {this.renderAvatar(userUri, socialType)}
          <Text style={{ ...Fonts.style.h4, marginLeft: Metrics.defaultMargin, color: Colors.textPrimary }}>{username}</Text>
          <Text style={{ ...Fonts.style.h5, position: 'absolute', right: Metrics.defaultMargin, color: Colors.textSecondary }}>
            {Utils.getDiffString(item.created_time)}
          </Text>
        </View>
        {this.renderSpacer(1, Colors.colGray)}
        <Text style={{ ...Fonts.style.h6, padding: Metrics.defaultMargin, color: Colors.textPrimary,  }}>
          {message}
        </Text>
        {item.type === 'photo' &&
          (
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.navigate('imgPreview', {img: item.full_picture})}}>
              <Image style={{ width: Metrics.screenWidth - 2 * Metrics.defaultMargin, height: Metrics.screenHeight / 3, resizeMode: 'cover' }} source={{ uri: item.full_picture }} />
            </TouchableOpacity>
          )
        }
        {item.type === 'video' && 
          (
            <VideoPlayer
              source={{ uri: item.source }}
              thumbnail={{ uri: item.full_picture }}
              repeat={false}
              disableFullscreen
              onBack={() => {}}
              style={{width: Metrics.screenWidth - 2 * Metrics.defaultMargin, height: Metrics.screenHeight / 3 }}
              paused={true}
              disableControlsAutoHide={true}
            />
          )
        }
        <View style={{padding: Metrics.defaultMargin, flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='thumbs-up' size={Metrics.iconSize} color={Utils.getSocialColor(socialType)} />
          {this.renderHorzDivider()}
          <Text style={{ ...Fonts.style.h4, marginRight: Metrics.iconSize, color: Utils.getSocialColor(socialType) }}>{13}</Text>
          <Icon name='comment' size={Metrics.iconSize} color={Utils.getSocialColor(socialType)} />
          {this.renderHorzDivider()}
          <Text style={{ ...Fonts.style.h4, marginRight: Metrics.iconSize, color: Utils.getSocialColor(socialType) }}>{12}</Text>
          <Icon name='share' size={Metrics.iconSize} color={Utils.getSocialColor(socialType)} />
          {this.renderHorzDivider()}
          <Text style={{ ...Fonts.style.h4, marginRight: Metrics.iconSize, color: Utils.getSocialColor(socialType) }}>{1}</Text>  
        </View>
        {this.renderSpacer(3, Colors.colGray)}
      </View>
    );
  },
  renderRoundScoreBoard(onScore1, onScore2, score1, score2, round, color = Colors.textPrimary) {
    return (
      <View key={round} style={{ margin: Metrics.defaultMargin, paddingVertical: Metrics.defaultMargin, borderRadius: 5, borderWidth: 1, borderColor: Colors.textPrimary }}>
        <Text style={{ ...Fonts.style.h3, alignSelf: 'center', textAlign: 'center', color: Colors.textPrimary, width: Metrics.screenWidth, marginBottom: 10 }}>Round{round}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ ...Styles.center, flex: 1 }}>
            {this.renderIcon(onScore1, 'arrow-up', 40, color)}
          </View>
          <Text style={{ ...Fonts.style.h0, flex: 1, textAlign: 'center', alignSelf: 'center', color: Colors.textPrimary }}>
            {score1}
          </Text>
          <Text style={{ ...Fonts.style.h0, flex: 1, textAlign: 'center', alignSelf: 'center', color: Colors.textPrimary }}>
            :
          </Text>
          <Text style={{ ...Fonts.style.h0, flex: 1, textAlign: 'center', alignSelf: 'center', color: Colors.textPrimary }}>
            {score2}
          </Text>
          <View style={{ ...Styles.center, flex: 1 }}>
            {this.renderIcon(onScore2, 'arrow-up', 40, color)}
          </View>
        </View>
      </View>
    );
  },
  renderFavoriteGame(onPress, imgTeam1, imgTeam2, txtTeam1, txtTeam2, score1, score2, round, key) {
    return (
      <TouchableOpacity key={key} onPress={onPress} style={{ flexDirection: 'row', paddingLeft: Metrics.defaultMargin, paddingRight: Metrics.defaultMargin, backgroundColor: Colors.brandPrimary, borderBottomColor: 'black', borderBottomWidth: 3, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: Metrics.defaultMargin }}>
            <Image style={{ marginRight: Metrics.defaultMargin, resizeMode: 'stretch', width: Metrics.smallTeamIcon, height: Metrics.smallTeamIcon }} source={{ uri: imgTeam1 }} />
            <Text style={{ ...Fonts.style.h3, color: Colors.textPrimary }}> {txtTeam1}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: Metrics.defaultMargin }}>
            <Image style={{ marginRight: Metrics.defaultMargin, resizeMode: 'stretch', width: Metrics.smallTeamIcon, height: Metrics.smallTeamIcon }} source={{ uri: imgTeam2 }} />
            <Text style={{ ...Fonts.style.h3, color: Colors.textPrimary }}> {txtTeam2}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={{ ...Fonts.style.h3, color: Colors.textPrimary, margin: Metrics.defaultMargin }}> {score1}</Text>
            <Text style={{ ...Fonts.style.h3, color: Colors.textPrimary, margin: Metrics.defaultMargin }}> {score2}</Text>
          </View>
          <Text style={{ ...Fonts.style.h4, color: Colors.textBlue }}>
            {round <= 4 ? Utils.getRankString(round) : 'FINAL'}
          </Text>
        </View>

      </TouchableOpacity>
    );
  },
  renderWIN() {
    return (
      <View style={{ ...Styles.center, borderColor: 'rgb(0,255,0)', borderWidth: 1 }}>
        <Text style={{ ...Fonts.style.h3, color: 'rgb(0,255,0)' }}>
          WIN
        </Text>
      </View>
    );
  },
  renderRoundItem(txtTeam1, txtTeam2, score1, score2, round, win = false, key) {
    return (
      <View key={key} style={{ flexDirection: 'row', paddingLeft: Metrics.defaultMargin, paddingRight: Metrics.defaultMargin, backgroundColor: Colors.brandPrimary, borderBottomColor: 'black', borderBottomWidth: 3, alignItems: 'center' }}>
        <View style={{ flexDirection: 'column', flex: 2 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: Metrics.defaultMargin }}>
            <Text style={{ ...Fonts.style.h3, color: Colors.textPrimary, marginRight: 20 }}> {score1 < 10 ? `0${score1}` : score1}</Text>
            <Text style={{ ...Fonts.style.h3, color: Colors.textSecondary }}> {txtTeam1}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: Metrics.defaultMargin }}>
            <Text style={{ ...Fonts.style.h3, color: Colors.textPrimary, marginRight: 20 }}> {score2 < 10 ? `0${score2}` : score2}</Text>
            <Text style={{ ...Fonts.style.h3, color: Colors.textSecondary }}> {txtTeam2}</Text>
          </View>
        </View>
        <View style={{ flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ ...Fonts.style.h4, color: Colors.textSecondary }}>
            GAME #{round}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {(win == true)
          ?
           (this.renderWIN())
           :
            (null)}
        </View>
      </View>
    );
  },
  renderCircle(color = Colors.textBlue, size = Metrics.dotSize) {
    return (
      <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: color }} />
    );
  },
  renderAdminRoundItem(onPress, imgTeam1, imgTeam2, txtTeam1, txtTeam2, round, skey) {
    let bdrCol = Colors.textBlue;
    let bkgCol = Colors.bkgTextBlue;
    if (onPress == null) {
      onPress = () => {};
      bdrCol = Colors.bdrSetScore;
      bkgCol = Colors.bkgSetScore;
    }
    let roundStr = `${Utils.getRankString(round)} QTR.`;
    if (round == 4) roundStr = '';
    return (
      <View key={skey} onPress={onPress} style={{ flexDirection: 'row', paddingLeft: Metrics.defaultMargin, paddingRight: Metrics.defaultMargin, backgroundColor: Colors.brandPrimary, borderBottomColor: 'black', borderBottomWidth: 3, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: Metrics.defaultMargin }}>
            <Image style={{ marginRight: Metrics.defaultMargin, resizeMode: 'stretch', width: Metrics.smallTeamIcon, height: Metrics.smallTeamIcon }} source={{ uri: imgTeam1 }} />
            <Text style={{ ...Fonts.style.h3, color: Colors.textPrimary }}> {txtTeam1}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', margin: Metrics.defaultMargin }}>
            <Image style={{ marginRight: Metrics.defaultMargin, resizeMode: 'stretch', width: Metrics.smallTeamIcon, height: Metrics.smallTeamIcon }} source={{ uri: imgTeam2 }} />
            <Text style={{ ...Fonts.style.h3, color: Colors.textPrimary }}> {txtTeam2}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={onPress} style={{ ...Styles.center, padding: 3, borderWidth: 1, borderRadius: 3, borderColor: bdrCol, backgroundColor: bkgCol, width: Metrics.screenWidth / 2 }}>
          <Text style={{ ...Fonts.style.h7, color: bdrCol, alignSelf: 'center' }}>
            ADD {roundStr} FINAL SCORE
          </Text>
        </TouchableOpacity>
      </View>);
  },
  renderGameItem(game, onPress) {
    if (game == undefined) return null;
    if (game.round == 0)// FutureGame
      { return (this.renderNearbyGame(() => onPress(game.key), game.team1.avatarUri, game.team2.avatarUri, game.team1.teamname, game.team2.teamname, Utils.getDateString(game.date), Utils.getTimeString(game.hour, game.minute), game.key)); }
    return (this.renderFavoriteGame(() => onPress(game.key), game.team1.avatarUri, game.team2.avatarUri, game.team1.teamname, game.team2.teamname, game.score1, game.score2, game.round, game.key));
  },
  renderNearbyGame(onPress, imgTeam1, imgTeam2, txtTeam1, txtTeam2, date, time, key) {
    return (
      <TouchableOpacity key={key} onPress={onPress}>
        <View style={{ flexDirection: 'row', paddingLeft: Metrics.defaultMargin, paddingRight: Metrics.defaultMargin, backgroundColor: Colors.brandPrimary, borderBottomColor: 'black', borderBottomWidth: 3, justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: Metrics.defaultMargin }}>
              <Image style={{ marginRight: Metrics.defaultMargin, resizeMode: 'stretch', width: Metrics.smallTeamIcon, height: Metrics.smallTeamIcon }} source={{ uri: imgTeam1 }} />
              <Text style={{ ...Fonts.style.h3, color: Colors.textSecondary }}> {txtTeam1}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: Metrics.defaultMargin }}>
              <Image style={{ marginRight: Metrics.defaultMargin, resizeMode: 'stretch', width: Metrics.smallTeamIcon, height: Metrics.smallTeamIcon }} source={{ uri: imgTeam2 }} />
              <Text style={{ ...Fonts.style.h3, color: Colors.textSecondary }}> {txtTeam2}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
            <Text style={{ ...Fonts.style.h5, color: Colors.textSecondary }}>
              {date}
            </Text>
            <Text style={{ ...Fonts.style.h4, color: Colors.textSecondary }}>
              {time}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  },
  renderIcon(onPress, icon = 'chevron-left', size = 30, color = Colors.textPrimary) {
    let iconName = icon;
    if (icon === 'close') iconName = 'times';
    if (icon == 'menu') iconName = 'bars';
    return (
      <TouchableOpacity
        style={{ paddingBottom: Platform.OS === 'android' ? 5 : 5 }}
        onPress={onPress} >
        <Icon name={iconName} size={size} color={color} />
      </TouchableOpacity>
    );
  },
  renderNavBarLeftButton(onPress, icon = 'chevron-left') {
    let iconName = icon;
    if (icon === 'close') iconName = 'times';
    if (icon == 'menu') iconName = 'bars';
    return (
      <TouchableOpacity
        style={{ paddingBottom: Platform.OS === 'android' ? 5 : 5 }}
        onPress={onPress} >
        <Icon name={iconName} size={30} color={Colors.textPrimary} />
      </TouchableOpacity>
    );
  },
  renderFloatButton(onPress) {
    return (
      <MKButton
        style={{ position: 'absolute', bottom: 10, right: 10, padding: 15 }}
        backgroundColor={Colors.brandPrimary}
        shadowRadius={2}
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.5}
        shadowColor={'black'}
        fab
        onPress={onPress}>
        <Image
          pointerEvents="none"
          source={Icons.trend}
          style={{ width: 30, height: 30 }}
          resizeMode={'contain'} />
      </MKButton>
    );
  },
  renderForwardIcon() {
    return (
      <View style={styles.forwardIconContainer}>
        <Icon
          style={{ marginTop: 5 }}
          name={'chevron-right'}
          size={20}
          color={Colors.textThird}
        />
      </View>
    );
  },
  renderTopicListItem(item, onPress) {
    return (
      <MKButton
        key={item.id}
        style={Styles.listItemContainer}
        backgroundColor={Colors.backgroundSecondary}
        onPress={onPress}>
        <View style={Styles.horzCenter}>
          <View style={[Styles.center, { flex: 3 }]}>
            {item.isTop10 ?
              this.renderApple(0, 'big') : this.renderApple(2, 'big')}
          </View>
          <View style={{ flex: 12 }}>
            <Text style={Fonts.style.listItemTitleText} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={Fonts.style.listItemDescriptionText} numberOfLines={1}>
              3{I18n.t('TIPS_FOUND')}
            </Text>
          </View>
          {this.renderForwardIcon()}
        </View>
      </MKButton>
    );
  },

  renderCheckboxTopicListItem(item, onPress) {
    return (
      <MKButton
        key={item.id}
        style={Styles.listItemContainer}
        backgroundColor={Colors.backgroundSecondary}
        onPress={onPress}>
        <View style={Styles.horzCenter}>
          <View style={[Styles.center, { flex: 3 }]}>
            {item.isTop10 ?
              this.renderApple(0, 'big') : this.renderApple(2, 'big')}
          </View>
          <View style={{ flex: 12 }}>
            <Text style={Fonts.style.listItemTitleText} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={Fonts.style.listItemDescriptionText} numberOfLines={1}>
              3{I18n.t('TIPS_FOUND')}
            </Text>
          </View>
          <View style={styles.checkboxIconContainer}>
            <MKCheckbox
              checked={false}
            />
          </View>
        </View>
      </MKButton>
    );
  },

  renderTipListItem(item, onPress) {
    return (
      <MKButton
        key={item.id}
        style={Styles.listItemContainer}
        backgroun dColor={Colors.backgroundSecondary}
        onPress={onPress}>
        <View style={Styles.horzCenter}>
          <View style={[Styles.horzCenter, { flex: 10 }]}>
            {this.renderTipDetails(item, false, () => {})}
          </View>
          {this.renderForwardIcon()}
        </View>
      </MKButton>
    );
  },


  renderSettingSwitchGroup(title, desc, onChange) {
    return (
      <View>
        <View style={Styles.horzCenter}>
          <Text style={[Fonts.style.fieldInput, { flex: 4 }]}>
            {title}
          </Text>
          <MKSwitch
            style={{ flex: 1 }}
            checked
            trackSize={25}
            trackLength={50}
            onColor={Colors.rippleSecondary}
            thumbOnColor={Colors.brandSEcondary}
            thumbOffColor={Colors.textThird}
            rippleColor={Colors.rippleSecondary}
            onCheckedChange={onChange} />
        </View>
        <Text
          style={[Fonts.style.listItemDescriptionText, {
            lineHeight: 14,
            color: Colors.fieldPlaceholder,
            marginTop: Platform.OS === 'ios' ? -Metrics.defaultMargin / 2 : -Metrics.defaultMargin }]}>
          {desc}
        </Text>
      </View>
    );
  },
  renderSettingHelpButtons(text, onPress) {
    return (
      <View>
        {this.renderSpacer(0.5)}
        <TouchableOpacity onPress={onPress}>
          <Text style={Fonts.style.fieldInput}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  },
};


export default CommonWidgets;
