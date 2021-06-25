import React, {useContext} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {AppContext} from '../../../application/provider';

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
import ContactChat from '../../../screens/contactChat';
import EditProfile from '../../../screens/editProfile';
import Splash from '../../../screens/splash';

const Stack = createStackNavigator();

export default () => {
  const [routeName] = useContext(AppContext);
  routeName.splash = `${Splash.name}0`;
  routeName.login = `${Login.name}1`;
  routeName.bottomNavigation = `${BottomNavigation.name}2`;
  routeName.checkIn = `${CheckIn.name}3`;
  routeName.watchMoreItems = `${WatchMoreItems.name}4`;
  routeName.anotherProfile = `Another${AnotherProfile.name}5`;
  routeName.serviceOrNeed = `${ServiceOrNeed.name}6`;
  routeName.request = `${Request.name}7`;
  routeName.contactChat = `${ContactChat.name}8`;
  routeName.postAd = `${PostAd.name}9`;
  routeName.editPost = `${EditPost.name}10`;
  routeName.editProfile = `${EditProfile.name}11`;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name={routeName.splash} component={Splash}/>
      <Stack.Screen name={routeName.login} component={Login}/>
      <Stack.Screen name={routeName.watchMoreItems} component={WatchMoreItems}/>
      <Stack.Screen name={routeName.checkIn} component={CheckIn}/> */}
      <Stack.Screen name={routeName.bottomNavigation} component={BottomNavigation}/>
      {/* <Stack.Screen name={routeName.editPost} component={EditPost}/>
      <Stack.Screen name={routeName.editProfile} component={EditProfile}/>
      <Stack.Screen name={routeName.serviceOrNeed} component={ServiceOrNeed}/>
      <Stack.Screen name={routeName.request} component={Request}/>
      <Stack.Screen name={routeName.contactChat} component={ContactChat}/>
      <Stack.Screen name={routeName.anotherProfile} component={AnotherProfile}/> */}
    </Stack.Navigator>
  );
};