import React, {useContext} from 'react';
import {CustomTabScreen, Button} from './styled';
import { AppContext } from '../../../application/provider';
import { BackHandler } from 'react-native';

export default ({descriptors, state, navigation, activeTintColor, inactiveTintColor}) => {
    const [routeName, isSearchingOnHome, setIsSearchingOnHome] = useContext(AppContext);
    console.log(isSearchingOnHome);
    const {routes} = state;
    return (
        <CustomTabScreen>
            {
                routes.map((route, i) => {
                    const {options} = descriptors[route.key];
                    const isFocused = state.index === i;
                    const tintColor = isFocused ? activeTintColor : inactiveTintColor;
                    const icon = options.tabBarIcon(tintColor);

                    return (
                        <Button 
                            key={i} 
                            onPress={() => {
                                if (isSearchingOnHome) {
                                    BackHandler.removeEventListener('hardwareBackPress', () => true);
                                    setIsSearchingOnHome(false);
                                }
                                navigation.navigate(route.name)
                            }} 
                        >
                            {icon}
                        </Button>
                    );
                })
            }
        </CustomTabScreen>
    )
}