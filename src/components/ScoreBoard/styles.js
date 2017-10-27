import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  container: {
 
   
    
  },
  buttonsContainer: {
    flex: 1,
    borderColor: Colors.borderPrimary,
    borderTopWidth: 1,
    padding: Metrics.defaultPadding / 2,
  },
  scorePan:
  {
    flexDirection: 'row',
    borderColor: Colors.textSecondary,
    borderTopWidth: 1,
    paddingLeft: Metrics.defaultMargin,
  },
  scoreCell:
  {
    alignItems: 'center', 
    justifyContent: 'center',
    borderLeftWidth: 1, 
    flex:1,
    borderColor: Colors.borderPrimary,
  }
});
