import { Platform } from 'react-native';

import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';


const Styles = {
  paymentTextInputStyle: {
    ...Fonts.style.h5,
    backgroundColor: 'transparent',
    height: 50,     
    flex: 1,
    marginLeft: 10,
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  paymentTextInputContainerStyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    marginRight:20, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullScreen:{
    flex: 1,
    backgroundColor: Colors.bk1 
  },
  modal: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  textInputStyle: {
    ...Fonts.style.textInput,
    width: Metrics.screenWidth / 2, 
    alignSelf: 'center', 
    textAlign: 'center',
    color: Colors.textPrimary,
  },
  textInputContainerStyle: {
    width: Metrics.buttonWidth,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  textProfile:
  {
    borderBottomWidth: 1,
    paddingHorizontal: 4,
  },
  textInputProfile:
  {
    ...Fonts.style.textInput,  
    height: Metrics.buttonHeight,
    width: Metrics.screenWidth / 2 -20,
    alignSelf: 'flex-start',
    textAlign: 'left',
    color: Colors.textPrimary,
  },
  button: {
    width: Metrics.buttonWidth,
    height: Metrics.buttonHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  horzCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullScreen: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  },
  fixedFullScreen: {
    position: 'absolute',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    top: 0,
    left: 0,
  },
  listItemContainer: {
    width: Metrics.listItemWidth,
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.borderPrimary,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundSecondary,
    marginBottom: 5,
  },
  navBarStyle: {
    paddingHorizontal: 15,
    alignItems: 'flex-end',
    backgroundColor: Colors.nav,
    height: Metrics.navBarHeight,
    marginTop: Platform.OS === 'ios' ? -Metrics.statusBarHeight * 2  : 0,
  },
  nav: {
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    backgroundColor:  Colors.nav,
    height: Metrics.navBarHeight, 
    borderBottomColor: Colors.colGray,
    borderBottomWidth: 1,
  },
  imgAvatar: {
  width: Metrics.logoSize,
  height: Metrics.logoSize, 
  }, 
  imgLogo: {
    width: Metrics.logoSize,
    height: Metrics.logoSize,
    borderRadius: Metrics.logoSize / 2,
  },
  avatar: {
    width: Metrics.appleSize * 3 / 2,
    height: Metrics.appleSize * 3 / 2,
    borderRadius: Metrics.appleSize * 3 / 4,
  },

};

export default Styles;
