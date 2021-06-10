import React from 'react';
import {CustomTabScreen, Button} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBookmark, faPlus, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ICON_SIZE = 25;
const icons = [
    faHome, faBookmark, faPlus, faEnvelope, faUser
]

export default ({state, navigation, activeTintColor, inactiveTintColor}) => {
    
    const {routes} = state;
    
    return (
        <CustomTabScreen>
            {
                routes.map((route, i) => {
                    const isFocused = state.index === i;
                    const tintColor = isFocused ? activeTintColor : inactiveTintColor;
                            
                    return (
                        <Button 
                            key={i} 
                            onPress={() => navigation.navigate(route.name)} 
                        >
                            <FontAwesomeIcon 
                                icon={icons[i]} 
                                size={ICON_SIZE}
                                color={tintColor}
                            />
                        </Button>
                    );
                })
            }
        </CustomTabScreen>
    )
}