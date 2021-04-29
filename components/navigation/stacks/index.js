import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../screens/login';
import Signup from '../../screens/signup';
import Home from '../../screens/home';
import Services from '../../screens/services';
import ServicesAndProfiles from '../../screens/servicesAndProfiles';
import ChatsAndRequests from '../../screens/chatsAndRequests';
import FavoriteProfilesAndServices from '../../screens/favoriteProfilesAndServices';
import Tests from '../../screens/tests';
import BottomNavigation from '../bottomNavigation';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Singup' component={Signup}/>
        <Stack.Screen name='MyRouter' component={BottomNavigation}/>
        <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  );
}