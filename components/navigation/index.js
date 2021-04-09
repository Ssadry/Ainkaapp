import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './bottomNavigation/index';

export default () => {
    return (
        <NavigationContainer>
            <BottomNavigation/>
        </NavigationContainer>
    )
}