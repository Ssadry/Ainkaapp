import React, {useContext} from 'react';
import {CustomTabScreen, Button, Text} from './styled';
import {SafeAreaView} from 'react-native';
import {AppContext} from '../../../application/provider';

export default ({state, descriptors, navigation, activeBackgroundColor, activeTintColor, inactiveBackgroundColor, inactiveTintColor, tabBarVisible}) => {
    
    const {routes} = state;
    const [popUpIsVisible, setPopUpIsVisible] = useContext(AppContext);
    
    return (
        <SafeAreaView>
            <CustomTabScreen>
                {routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
                    const isFocused = state.index === index;
                    const tintColor = isFocused ? activeTintColor : inactiveTintColor;
                    const backgroundColor = isFocused ? activeBackgroundColor : inactiveBackgroundColor;
                    
                    const onPress = () => {
                        if (route.name !== 'Services') {
                            setPopUpIsVisible(false);
                            navigation.navigate(route.name);
                        } else {
                            setPopUpIsVisible(!popUpIsVisible);
                        }
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