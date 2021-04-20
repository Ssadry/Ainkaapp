import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from '../../screens/signup';
import Services from '../../screens/services';
import ServicesAndProfiles from '../../screens/servicesAndProfiles';
import ChatsAndRequests from '../../screens/chatsAndRequests';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/*<Stack.Screen name="Login" component={Login} />*/}
      {/*<Stack.Screen name="Home" component={Home} />*/}
      <Stack.Screen name="Chats and requests" component={ServicesAndProfiles} />
    </Stack.Navigator>
  );
}