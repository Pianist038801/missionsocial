import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const bottomMargin = 24;
const sHeight = width < height ? height : width;
const sWidth = width < height ? width : height;
const dMargin = 10;
const navBarHeight = Platform.OS === 'ios' ? 40   : 60;
const metrics = {
  innerHeight: sHeight - navBarHeight,
  gridCell: sWidth / 14,
  dotSize: sWidth / 70,
  smallTeamIcon: 38,
  bigTeamIcon: 90,
  searchBarHeight: 30,
  screenWidth: sWidth,
  screenHeight: sHeight, 
  avatarSize: 30,
  iconSize: 15,
  navBarHeight: Platform.OS === 'ios' ? 40   : 60,
  tabBarHeight: 50,
  tabBarIconSize: 25,
  socialBtnSize: 45,
  socialIconSize: 25,
  defaultMargin: dMargin,
  defaultPadding: dMargin,
  listItemHeight: sHeight / 9,
  appleSize: sHeight / 13,
  contentHeight: sHeight - 110,
  listItemWidth: sWidth - (dMargin * 2),
  buttonWidth: width * 0.8,
  buttonHeight: height / 15,
  logoSize: width / 3,
  footerHeight: width / 7,
  androidMarginBottom: bottomMargin,
  statusBarHeight: 20,
  circleBtnSize: 50,
  iconSizeSmall: 15,
};

export default metrics;
