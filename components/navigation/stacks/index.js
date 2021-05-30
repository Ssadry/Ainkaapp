import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from '../../../screens/signup';
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

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name='Singup' component={Signup}/>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='WatchProfile' component={WatchProfile}/>
      <Stack.Screen name='Services' component={Services}/>
      <Stack.Screen name='Chat' component={Chat}/>
      <Stack.Screen name='Request' component={Request}/>
      <Stack.Screen name='WatchMoreItems' component={WatchMoreItems}/> */}
      {/* <Stack.Screen name='ChatsAndRequest' component={ChatsAndRequests}/> */}

      {/* <Stack.Screen name='MyRouter' component={BottomNavigation}/>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Saved' component={Saved}/> 
      <Stack.Screen name='WatchMoreItems' component={WatchMoreItems}/> */}

      <Stack.Screen name='MyRouter' component={BottomNavigation}/>
      <Stack.Screen name='WatchMoreItems' component={WatchMoreItems}/>
      
    </Stack.Navigator>
  );
}