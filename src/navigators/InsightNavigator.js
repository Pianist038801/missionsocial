import { StackNavigator } from 'react-navigation';
import { Colors, Fonts, Metrics } from '@theme';
import Empty from '@screens/Empty';

const InsightNavigator = StackNavigator({
  verifyAdmin: {
    screen: Empty,
  },
  adminTabNav: {
    screen: Empty,
  },
}, { initialRouteName: 'verifyAdmin',
  headerMode: 'none' },
);
export default InsightNavigator;
