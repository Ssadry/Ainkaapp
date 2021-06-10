import React, {useContext, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AppContext} from '../../../application/provider';
import {removeNavigationScreen} from '../../../application/navigation';

import Home from '../../../screens/home';
import Profile from '../../../screens/profile';
import ChatsAndRequests from '../../../screens/chatsAndRequests';
import PostAd from '../../../screens/postAd';

import Saved from '../../../screens/saved';
import CustomTabScreen from '../customTabScreen/index';

const Tab = createBottomTabNavigator();

const BottomNavigation = ({navigation}) => {
  const [routeName] = useContext(AppContext);
  routeName.home = Home.name;
  routeName.saved = Saved.name;
  routeName.profile = Profile.name;

  useEffect(() => removeNavigationScreen(navigation, routeName.login));

  return (
    <Tab.Navigator
      initialRouteName={routeName.home}
      // backBehavior={true}
      tabBar={props =>
        <CustomTabScreen
          state={props.state}
          navigation={props.navigation}
          activeTintColor="green"
          inactiveTintColor="black"
        />
      }
    >
      <Tab.Screen 
        name={routeName.home}
        component={Home}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name={routeName.saved}
        component={Saved}
        options={{
          title: '',
        }}
      />
      <Tab.Screen 
        name="PostAd" 
        component={PostAd}
        options={{
          title: '',
        }}
      />
      <Tab.Screen 
        name="ChatAndRequests" 
        component={ChatsAndRequests}
        options={{
          title: '',
        }}
      />
      <Tab.Screen 
        name={routeName.profile} 
        component={Profile}
        options={{
          title: '',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;