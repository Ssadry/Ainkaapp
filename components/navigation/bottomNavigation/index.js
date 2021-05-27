import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../screens/home';
import Profile from '../../../screens/profile';
import Services from '../../../screens/services';
import ChatsAndRequests from '../../../screens/chatsAndRequests';
import FavoriteProfilesAndServices from '../../../screens/favoriteProfilesAndServices'
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
          activeBackgroundColor="gray"
          activeTintColor="black"
          inactiveBackgroundColor="white"
          inactiveTintColor="gray"
        />
      }
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          title: '',
          tabBarIcon: () => <FontAwesomeIcon icon={faHome} size={25}/>
        }}
      />
      <Tab.Screen
        name="Heart"
        component={FavoriteProfilesAndServices}
        options={{
          title: '',
          tabBarIcon: () => <FontAwesomeIcon icon={faHeart} size={25}/>
        }}
      />
      <Tab.Screen 
        name="PostAd" 
        component={Services}
        options={{
          title: '',
          tabBarIcon: () => <FontAwesomeIcon icon={faPlus} size={25}/>
        }}
      />
      <Tab.Screen 
        name="ChatAndRequests" 
        component={ChatsAndRequests}
        options={{
          title: '',
          tabBarIcon: () => <FontAwesomeIcon icon={faEnvelope} size={25}/>
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          title: '',
          tabBarIcon: () => <FontAwesomeIcon icon={faUser} size={25}/>
        }}
      />
    </Tab.Navigator>
  );
}