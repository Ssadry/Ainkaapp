import React, {useContext, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AppContext} from '../../../application/provider';
import {removeNavigationScreen} from '../../../application/navigation';

import Home from '../../../screens/home';
import Profile from '../../../screens/profile';
import ChatsAndRequests from '../../../screens/chatsAndRequests';
import Inbox from '../../../screens/inbox';
import PostAd from '../../../screens/postAd';
import Saved from '../../../screens/saved';
import CustomTabScreen from '../customTabScreen/index';
import {HomeIcon, SavedIcon, PlusIcon, InboxIcon, ProfileIcon} from '../../../assets/svg/icon';
import {getCityById} from '../../../services';

const ICON_SIZE = 35;
const activeTintColor = 'green', inactiveTintColor = 'black';

const Tab = createBottomTabNavigator();

const BottomNavigation = ({navigation, route}) => {
  const [routeName] = useContext(AppContext);
  const {prevScreen} = route.params;
  routeName.home = Home.name;
  routeName.saved = Saved.name;
  routeName.profile = Profile.name;
  routeName.inbox = Inbox.name;

  useEffect(() => {
    if (prevScreen !== undefined)
      removeNavigationScreen(navigation, prevScreen);
  });

  return (
    <Tab.Navigator
      initialRouteName={routeName.home}
      // backBehavior={true}
      tabBar={props =>
        <CustomTabScreen
          descriptors={props.descriptors}
          state={props.state}
          navigation={props.navigation}
          activeTintColor={activeTintColor}
          inactiveTintColor={inactiveTintColor}
        />
      }
    >
      <Tab.Screen 
        name={routeName.home}
        component={Home}
        options={{
          title: Home.name,
          tabBarBadge: 0,
          tabBarIcon: (tintColor) => <HomeIcon color={tintColor} size={ICON_SIZE}/>
        }}
      />
      <Tab.Screen
        name={routeName.saved}
        component={Saved}
        options={{
          title: Saved.name,
          tabBarBadge: 0,
          tabBarIcon: (tintColor) => <SavedIcon color={tintColor} size={ICON_SIZE}/>
        }}
      />
      <Tab.Screen 
        name={PostAd.name} 
        component={PostAd}
        options={{
          title: PostAd.name,
          tabBarBadge: 0,
          tabBarIcon: (tintColor) => <PlusIcon color={tintColor} size={ICON_SIZE}/>
        }}
      />
      <Tab.Screen 
        name={routeName.inbox} 
        component={Inbox}
        options={{
          title: Inbox.name,
          tabBarBadge: 5,
          tabBarIcon: (tintColor) => <InboxIcon size={ICON_SIZE} color={tintColor}/>
        }}
      />
      <Tab.Screen 
        name={routeName.profile} 
        component={Profile}
        options={{
          title: Profile.name,
          tabBarBadge: 0,
          tabBarIcon: (tintColor) => <ProfileIcon size={ICON_SIZE} color={tintColor}/>
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;