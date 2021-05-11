import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../../screens/login';
import Signup from '../../../screens/signup';
import Home from '../../../screens/home';
import Profile from '../../../screens/profile';
import WatchProfile from '../../../screens/watchProfile';
import Services from '../../../screens/services';
import Chat from '../../../screens/chat';
import FavoriteProfilesAndServices from '../../../screens/favoriteProfilesAndServices';
import Tests from '../../../screens/tests';
import TestsAnimation from '../../../screens/testAnimation';
import ChatsAndRequests from '../../../screens/chatsAndRequests';
import Request from '../../../screens/request';
import BottomNavigation from '../bottomNavigation';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
      /*
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Singup' component={Signup}/>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='WatchProfile' component={WatchProfile}/>
      <Stack.Screen name='Services' component={Services}/>
      <Stack.Screen name='Chat' component={Chat}/>
      <Stack.Screen name='MyRouter' component={BottomNavigation}/>
      <Stack.Screen name='Request' component={Request}/>
      <Stack.Screen name='ChatsAndRequest' component={ChatsAndRequests}/>
      */  
      }
      <Stack.Screen name='TestAnimation' component={TestsAnimation}/>
    </Stack.Navigator>
  );
}