import React from 'react';
import {CustomTabScreen, Button} from './styled';
import {HomeIcon, SavedIcon, PlusIcon, InboxIcon, ProfileIcon} from '../../../assets/svg/icon';

import Home from '../../../screens/home';
import Saved from '../../../screens/saved';
import PostAd from '../../../screens/postAd';
import Inbox from '../../../screens/inbox';
import Profile from '../../../screens/profile';

const ICON_SIZE = 35;

// const chooseIcon = (title, color, size) => {
//     switch (title) {
//         case Home.name:
//             return <HomeIcon color={color} size={size}/>
//         case Saved.name:
//             return <SavedIcon color={color} size={size}/>
//         case PostAd.name:
//             return <PlusIcon color={color} size={size}/>
//         case Inbox.name:
//             return <InboxIcon color={color} size={size}/>
//         case Profile.name:
//             return <ProfileIcon color={color} size={size}/>
//         default:
//             console.log('Che, no encuentro ningún icono con este título en el bottom navigation');
//     }
// }

export default ({descriptors, state, navigation, activeTintColor, inactiveTintColor}) => {
    const {routes} = state;
    
    return (
        <CustomTabScreen>
            {
                routes.map((route, i) => {
                    const options = descriptors[route.key].options;
                    // const title = options.title;
                    const isFocused = state.index === i;
                    const tintColor = isFocused ? activeTintColor : inactiveTintColor;
                    // const icon = chooseIcon(title, tintColor, ICON_SIZE);
                    const icon = options.tabBarIcon(tintColor);

                    return (
                        <Button 
                            key={i} 
                            onPress={() => navigation.navigate(route.name)} 
                        >
                            {icon}
                        </Button>
                    );
                })
            }
        </CustomTabScreen>
    )
}