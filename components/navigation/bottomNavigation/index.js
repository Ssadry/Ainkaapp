import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/home';
import Profile from '../../pages/profile';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home}/>
      <Tab.Screen name="profile" component={Profile}/>
    </Tab.Navigator>
  );
}