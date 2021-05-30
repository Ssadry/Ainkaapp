import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../screens/home';
import Profile from '../../../screens/profile';
import Services from '../../../screens/services';
import ChatsAndRequests from '../../../screens/chatsAndRequests';
import PostAd from '../../../screens/postAd';
// import FavoriteProfilesAndServices from '../../../screens/favoriteProfilesAndServices'
import Saved from '../../../screens/saved';
import CustomTabScreen from '../customTabScreen/index';


const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="PostAd"
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
        name="Home" 
        component={Home}
        options={{
          title: '',
        }}
      />
      <Tab.Screen
        name="Saved"
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
        name="Profile" 
        component={Profile}
        options={{
          title: '',
        }}
      />
    </Tab.Navigator>
  );
}