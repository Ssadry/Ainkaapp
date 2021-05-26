import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../screens/home';
import Profile from '../../../screens/profile';
import Services from '../../../screens/services';
import ChatsAndRequests from '../../../screens/chatsAndRequests';
import Saved from '../../../screens/saved'
import CustomTabScreen from '../customTabScreen/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faEnvelope, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props =>
        <CustomTabScreen
          state={props.state}
          descriptors={props.descriptors}
          navigation={props.navigation}
          activeTintColor="green"
          inactiveTintColor="gray"
        />
      }
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          title: ''
        }}
      />
      <Tab.Screen
        name="Heart"
        component={Saved}
        options={{
          title: ''
        }}
      />
      <Tab.Screen 
        name="PostAd" 
        component={Services}
        options={{
          title: ''
        }}
      />
      <Tab.Screen 
        name="ChatAndRequests" 
        component={ChatsAndRequests}
        options={{
          title: ''
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          title: '',
          // tabBarIcon: () => <FontAwesomeIcon icon={faUser} size={ICON_SIZE}/>
        }}
      />
    </Tab.Navigator>
  );
}