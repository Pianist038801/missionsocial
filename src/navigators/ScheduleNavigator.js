import { StackNavigator } from 'react-navigation';
import { Colors, Fonts, Metrics } from '@theme';
import PostSchedule from '@screens/Schedule/PostSchedule';
import EditPost from '@screens/Posts/EditPost';  


const ScheduleNavigator = StackNavigator({
  postSchedule: {
          screen: PostSchedule,
        },
  editPost:   {
          screen: EditPost
        }
 
}, { initialRouteName: 'postSchedule',
      headerMode: 'none' },
);
export default ScheduleNavigator;
