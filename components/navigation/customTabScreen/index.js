import React, {useContext} from 'react';
import {CustomTabScreen, Button, Notification, NotificationText} from './styled';
import { AppContext } from '../../../application/provider';
import { BackHandler } from 'react-native';
import defaultColors from '../../../assets/colors/defaultColors.json';

const HARDWARE_BACK_PRESS = 'hardwareBackPress';
const HOME = 'Home';

const resetHardwareBackPress = (setIsSearchingOnHome, navigation) => {
    BackHandler.removeEventListener(HARDWARE_BACK_PRESS, () => true);
    setIsSearchingOnHome(false);
    BackHandler.addEventListener(HARDWARE_BACK_PRESS, () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
            return true;
        }
        BackHandler.exitApp();
        return false;
    });       
}

export default ({descriptors, state, navigation, activeTintColor, inactiveTintColor}) => {
    const [routeName, isSearchingOnHome, setIsSearchingOnHome] = useContext(AppContext);
    const {routes} = state;
    return (
        <CustomTabScreen
            backgroundColor={defaultColors.Blanco}
        >
            {
                routes.map((route, i) => {
                    const {options} = descriptors[route.key];
                    const isFocused = state.index === i;
                    const tintColor = isFocused ? activeTintColor : inactiveTintColor;
                    const icon = options.tabBarIcon(tintColor);
                    const {tabBarBadge} = options;

                    return (
                        <Button 
                            key={i} 
                            onPress={() => {
                                if (route.name != HOME) resetHardwareBackPress(setIsSearchingOnHome, navigation);
                                navigation.navigate(route.name);
                            }} 
                        >
                        <Notification
                            hasNotifications={tabBarBadge}
                            backgroundColor={defaultColors.Rojo}
                        >
                            <NotificationText
                                adjustFontSizeToFit
                            >
                                {tabBarBadge}
                            </NotificationText>
                        </Notification>
                        {icon}
                        </Button>
                    );
                })
            }
        </CustomTabScreen>
    )
}