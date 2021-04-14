import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../pages/home';
import Login from '../../pages/login';
import Profile from '../../pages/profile';
import Services from '../../pages/services';
import ServicesAndProfiles from '../../pages/ServicesAndProfiles';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/*<Stack.Screen name="Login" component={Login} />*/}
      {/*<Stack.Screen name="Home" component={Home} />*/}
      <Stack.Screen name="ServicesAndProfile" component={ServicesAndProfiles} />
    </Stack.Navigator>
  );
}