import { StackNavigator } from 'react-navigation';
import { Colors, Fonts, Metrics } from '@theme';
import Empty from '@screens/Empty';
import Settings from '@screens/Settings/Settings';
import AddAccount from '@screens/Settings/AddAccount';
import AddSubAccount from '@screens/Settings/AddSubAccount';

const SettingsNavigator = StackNavigator({
  settings: {
          screen: Settings,
        },
  addAccount: {
          screen: AddAccount,
        },
  addSubAccount: {
          screen: AddSubAccount,
        }
}, { initialRouteName: 'settings',
      headerMode: 'none' },
);
export default SettingsNavigator;
