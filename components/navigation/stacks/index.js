import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../pages/home';
import Login from '../../pages/login';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}