import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/home';
import Login from '../../screens/login';
import Profile from '../../screens/profile';
import Services from '../../screens/services';
import ServicesAndProfiles from '../../screens/ServicesAndProfiles';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/*<Stack.Screen name="Login" component={Login} />*/}
      {/*<Stack.Screen name="Home" component={Home} />*/}
      <Stack.Screen name="ServicesAndProfiles" component={ServicesAndProfiles} />
    </Stack.Navigator>
  );
}