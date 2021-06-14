import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {AppContext} from '../../../application/provider';

// import Signup from '../../../screens/signup';
// import Home from '../../../screens/home';
import WatchMoreItems from '../../../screens/watchMoreItems';
import AnotherProfile from '../../../screens/profile';
import WatchProfile from '../../../screens/watchProfile';
import Services from '../../../screens/services';
import Chat from '../../../screens/chat';
import Tests from '../../../screens/tests';
import ChatsAndRequests from '../../../screens/chatsAndRequests';
import Request from '../../../screens/request';
import BottomNavigation from '../bottomNavigation';
import CheckIn from '../../../screens/checkIn';
import Login from '../../../screens/login';
import PostAd from '../../../screens/postAd';
import EditPost from '../../../screens/editPost';
import ServiceOrNeed from '../../../screens/serviceOrNeed';
import Inbox from '../../../screens/inbox';
import ContactChat from '../../../screens/contactChat';
import EditProfile from '../../../screens/editProfile';
import Splash from '../../../screens/splash';

const Stack = createStackNavigator();

export default () => {
  const [routeName] = useContext(AppContext);
  routeName.splash = Splash.name;
  routeName.login = Login.name;
  routeName.bottomNavigation = BottomNavigation.name;
  routeName.checkIn = CheckIn.name;
  routeName.watchMoreItems = WatchMoreItems.name;
  routeName.anotherProfile = 'Another' + AnotherProfile.name;
  routeName.serviceOrNeed = ServiceOrNeed.name;
  routeName.request = Request.name;
  routeName.contactChat = ContactChat.name;
  routeName.postAd = PostAd.name;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routeName.splash} component={Splash}/>
      <Stack.Screen name={routeName.login} component={Login}/>
      <Stack.Screen name={routeName.bottomNavigation} component={BottomNavigation}/>
      <Stack.Screen name={routeName.checkIn} component={CheckIn}/>
      <Stack.Screen name={routeName.watchMoreItems} component={WatchMoreItems}/>
      <Stack.Screen name={routeName.serviceOrNeed} component={ServiceOrNeed}/>
      <Stack.Screen name={routeName.request} component={Request}/>
      <Stack.Screen name={routeName.contactChat} component={ContactChat}/>
      <Stack.Screen name={routeName.anotherProfile} component={AnotherProfile}/>
      {/* <Stack.Screen name={routeName.postAd} component={PostAd}/> */}
    </Stack.Navigator>
  );
};