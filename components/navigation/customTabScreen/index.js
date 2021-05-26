import React, {useContext} from 'react';
import {CustomTabScreen, Button, Text} from './styled';
import {SafeAreaView} from 'react-native';
import {AppContext} from '../../../application/provider';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faEnvelope, faPlus, faBookmark } from '@fortawesome/free-solid-svg-icons';

const ICON_SIZE = 25;

export default ({state, 
                descriptors, 
                navigation, 
                activeTintColor, 
                inactiveTintColor}) => {
    
    const {routes} = state;
    const [popUpIsVisible, setPopUpIsVisible] = useContext(AppContext);

    const icons = [
        faHome, faBookmark, faPlus, faEnvelope, faUser
    ]
    
    return (
        <SafeAreaView>
            <CustomTabScreen>
                {
                    routes.map((route, i) => {
                        // const { options } = descriptors[route.key];
                        // const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
                        const isFocused = state.index === i;
                        const tintColor = isFocused ? activeTintColor : inactiveTintColor;
                        
                        const onPress = () => {
                            if (route.name !== 'PostAd') {
                                setPopUpIsVisible(false);
                                navigation.navigate(route.name);
                            } else {
                                setPopUpIsVisible(!popUpIsVisible);
                            }
                        };
            
                        return (
                            <Button 
                                key={i} 
                                onPress={onPress}
                            >
                                {/* {
                                    options.tabBarIcon !== undefined && options.tabBarIcon({ color: tintColor, size: 50 })
                                } */}
                                <FontAwesomeIcon 
                                    icon={icons[i]} 
                                    size={ICON_SIZE}
                                    color={
                                        icons[i] !== faPlus ? 
                                            tintColor : popUpIsVisible ? 'blue' : inactiveTintColor
                                    } 
                                />
                                {/* {
                                    <Text tintColor={tintColor}>
                                        {label}
                                    </Text>
                                } */}
                            </Button>
                        );
                    })
                }
            </CustomTabScreen>
      </SafeAreaView>
    )
}