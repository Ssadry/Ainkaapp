import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../pages/home';
import Profile from '../../pages/profile';

const Stack = createStackNavigator();

export default ()=> {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}