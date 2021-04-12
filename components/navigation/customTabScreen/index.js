import React from 'react';
import {CustomTabScreen, Button, Text} from './styled';
import {SafeAreaView} from 'react-native';

export default ({state, descriptors, navigation, activeBackgroundColor, activeTintColor, inactiveBackgroundColor, inactiveTintColor, tabBarVisible}) => {
    
    const {routes} = state;
    
    return (
        <SafeAreaView>
            <CustomTabScreen>
                {routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
                    const isFocused = state.index === index;
                    const tintColor = isFocused ? activeTintColor : inactiveTintColor;
                    const backgroundColor = isFocused ? activeBackgroundColor : inactiveBackgroundColor;
                    const tabBarVisible = state.tabBarVisible;
                    
                    const onPress = () => {
                        navigation.navigate(route.name);
                    };
        
                    return (
                        <Button key={index} onPress={onPress} backgroundColor={backgroundColor}>
                            {
                                options.tabBarIcon !== undefined && options.tabBarIcon({ color: tintColor, size: 28 })
                            }
                            {
                                <Text tintColor={tintColor}>
                                    {label}
                                </Text>
                            }
                    </Button>
                    );
                })}
            </CustomTabScreen>
      </SafeAreaView>
    )
}