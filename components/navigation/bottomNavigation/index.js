import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import Profile from '../../screens/profile';
import Services from '../../screens/services';
import Chat from '../../screens/chat';
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
          tabBarVisible={props.tabBarVisible}
        />}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          title: '',
          tabBarIcon: () => <FontAwesomeIcon icon={faHome} />
        }}
      />
      <Tab.Screen name="Chat" component={Chat}
        options={{
          title: '',
          tabBarIcon: () => <FontAwesomeIcon icon={faEnvelope} size="35px" />
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          title: '',
          tabBarIcon: () => <FontAwesomeIcon icon={faUser} size="35px" />
        }}
      />
      <Tab.Screen name="Services" component={Services}
        options={{
          title: '',
          tabBarIcon: () => <FontAwesomeIcon icon={faPlus} size="35px" />
        }}
      />
    </Tab.Navigator>
  );
}