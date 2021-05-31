import React, {useContext} from 'react';
import {CustomTabScreen, Button} from './styled';
import {SafeAreaView} from 'react-native';
import {AppContext} from '../../../application/provider';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBookmark, faPlus, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ICON_SIZE = 25;
const icons = [
    faHome, faBookmark, faPlus, faEnvelope, faUser
]

export default ({state, navigation, activeTintColor, inactiveTintColor}) => {
    
    const {routes} = state;
    // const [popUpIsVisible, setPopUpIsVisible] = useContext(AppContext);
    
    return (
        <SafeAreaView>
            <CustomTabScreen>
                {
                    routes.map((route, index) => {
                        const isFocused = state.index === index;
                        const tintColor = isFocused ? activeTintColor : inactiveTintColor;
                        
                        const onPress = () => {
                            // if (route.name !== 'PostAd') {
                            //     setPopUpIsVisible(false);
                            //     navigation.navigate(route.name);
                            // } else {
                            //     setPopUpIsVisible(!popUpIsVisible);
                            // }

                            navigation.navigate(route.name);
                        };
            
                        return (
                            <Button 
                                key={index} 
                                onPress={onPress} 
                            >
                                <FontAwesomeIcon 
                                    icon={icons[index]} 
                                    size={ICON_SIZE}
                                    // color={route.name !== 'PostAd' ? tintColor : popUpIsVisible ? 'blue' : inactiveTintColor}
                                    color={tintColor}
                                />
                            </Button>
                        );
                    })
                }
            </CustomTabScreen>
      </SafeAreaView>
    )
}