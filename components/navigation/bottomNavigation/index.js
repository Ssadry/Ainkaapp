import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/home';
import Profile from '../../pages/profile';
import Services from '../../pages/services';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Services" component={Services}/>
      <Tab.Screen name="Profile" component={Profile}/>
      <Tab.Screen name="Home" component={Home}/>
    </Tab.Navigator>
  );
}