import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from '../../screens/signup';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/*<Stack.Screen name="Login" component={Login} />*/}
      {/*<Stack.Screen name="Home" component={Home} />*/}
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}