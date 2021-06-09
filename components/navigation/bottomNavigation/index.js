import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AppContext} from '../../../application/provider';

import Home from '../../../screens/home';
import Profile from '../../../screens/profile';
import Services from '../../../screens/services';
import ChatsAndRequests from '../../../screens/chatsAndRequests';
import PostAd from '../../../screens/postAd'; ////////////////////
// import EditPost from '../../../screens/editPost';
// import FavoriteProfilesAndServices from '../../../screens/favoriteProfilesAndServices'
import Saved from '../../../screens/saved';
import CustomTabScreen from '../customTabScreen/index';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const [routeName] = React.useContext(AppContext);
  routeName.home = Home.name;
  routeName.saved = Saved.name;

  return (
    <Tab.Navigator
      initialRouteName={routeName.saved}
      // backBehavior={() => {
      //   console.log('ñe')
      // }}
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
        listeners={({navigation, route}) => ({
          tabPress: e => {
            e.preventDefault();
            console.log('xd');
          }
        })}
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
        name="Profile" 
        component={Profile}
        options={{
          title: '',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;