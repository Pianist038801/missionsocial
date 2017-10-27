 import { StackNavigator } from 'react-navigation';
 import { Colors, Fonts, Metrics } from '@theme';
 import Empty from '@screens/Empty';
 import Feed from '@screens/Feeds/Feed';
 import Filter_Feed from '@screens/Feeds/Filter_Feed';
 import Add_Feed from '@screens/Feeds/Add_Feed';
 import ImagePreview from '@screens/Feeds/ImagePreview';

 const FeedNavigator = StackNavigator({
   feed: {
     screen: Feed,
   },
   filter_feed: {
     screen: Filter_Feed,
   },
   add_feed: {
     screen: Add_Feed,
   },
   imgPreview:{
     screen: ImagePreview,
   }
 }, { initialRouteName: 'feed', 
   headerMode: 'none' },
);
 export default FeedNavigator;
