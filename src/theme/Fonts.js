import { Platform } from 'react-native';
import Colors from './Colors';
import Metrics from './Metrics';

const type = {
  /*
  regular: 'TitilliumWeb-Regular',
  light: 'TitilliumWeb-Light',
  bold: 'TitilliumWeb-Bold',
  semibold: 'TitilliumWeb-SemiBold',*/
  regular: 'Roboto',
  light: 'Roboto',
  bold: 'Roboto',
  semibold: 'Roboto'
};

const size = {
  h0: 40,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  default: 12,
  small: 10,
  mini: 8,
};

const style = {
  textInput: {
    fontFamily: type.regular,
    fontSize: size.h5,
    backgroundColor: 'transparent',
  },
  fieldInput: {
    fontFamily: type.regular,
    fontSize: size.h6,
    backgroundColor: 'transparent',
    color: Colors.textPrimary,
  },
  h0: {
    fontFamily: type.semibold,
    fontSize: size.h0,
    backgroundColor: 'transparent',
    letterSpacing: 2,
    includeFontPadding: true,
  },
  h1: {
    fontFamily: type.semibold,
    fontSize: size.h1,
    backgroundColor: 'transparent',
    letterSpacing: 2,
    includeFontPadding: true,
  },
  h2: {
    fontFamily: type.semibold,
    fontSize: size.h2,
    backgroundColor: 'transparent',
  },
  h3: {
    fontFamily: type.semibold,
    fontSize: size.h3,
    backgroundColor: 'transparent',
  },
  h4: {
    fontFamily: type.semibold,
    fontSize: size.h4,
    backgroundColor: 'transparent',
  },
  h5: {
    fontFamily: type.semibold,
    fontSize: size.h5,
    backgroundColor: 'transparent',
  },
  h6: {
    fontFamily: type.semibold,
    fontSize: size.h6,
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontFamily: type.bold,
    fontSize: size.h4,
    color: 'white',
    backgroundColor: 'transparent',
  },
  bottomText: {
    fontFamily: type.regular,
    fontSize: size.h6,
    backgroundColor: 'transparent',
  },
  hyperButtonText: {
    fontFamily: type.semibold,
    fontSize: size.h6,
    backgroundColor: 'transparent',
    textDecorationLine: 'underline',
  },
  listItemTitleText: {
    fontFamily: type.semibold,
    fontSize: size.h5,
    backgroundColor: 'transparent',
    color: Colors.textThird,
  },
  listItemDescriptionText: {
    fontFamily: type.regular,
    fontSize: size.default,
    backgroundColor: 'transparent',
    color: Colors.textFourth,
  },
  tabButtonText: {
    fontFamily: type.regular,
    fontSize: 30,
    backgroundColor: 'transparent',
  },
};

export default {
  type,
  size,
  style,
};
