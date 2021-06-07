import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import Signup from '../../../screens/signup';
import Home from '../../../screens/home';
import WatchMoreItems from '../../../screens/watchMoreItems';
import Profile from '../../../screens/profile';
import WatchProfile from '../../../screens/watchProfile';
import Services from '../../../screens/services';
import Chat from '../../../screens/chat';
import Tests from '../../../screens/tests';
import ChatsAndRequests from '../../../screens/chatsAndRequests';
import Request from '../../../screens/request';
import BottomNavigation from '../bottomNavigation';
import CheckIn from '../../../screens/checkIn';
import Saved from '../../../screens/saved';
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
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='CheckIn' component={CheckIn}/>
      <Stack.Screen name='MyRouter' component={BottomNavigation}/>
      <Stack.Screen name='WatchMoreItems' component={WatchMoreItems}/>
      <Stack.Screen name='EditPost' component={EditPost}/> */}
      <Stack.Screen name='Home' component={Home}/>
      {/* <Stack.Screen name='CheckIn' component={CheckIn}/> */}

    </Stack.Navigator>
  );
}