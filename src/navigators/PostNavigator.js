import { StackNavigator } from 'react-navigation';
import { Colors, Fonts, Metrics } from '@theme';
import Empty from '@screens/Empty';
import AddPost from '@screens/Posts/AddPost'; 
import PostResult from '@screens/Posts/PostResult';  
import EditPost from '@screens/Posts/EditPost';  

const PostNavigator = StackNavigator({
  addPost:    {
          screen: AddPost,
        },
  postResult: {
          screen: PostResult,
        },
  editPost:   {
    screen: EditPost
  }
         
}, { initialRouteName: 'addPost',
      headerMode: 'none' },
);
export default PostNavigator;
