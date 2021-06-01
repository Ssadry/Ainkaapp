import React from 'react';
import {Container, Profile, Hours, NotificationPoint} from './styled';

export default Hours = ({
    click = () => alert('click'),
    children = '3h'
}) => {
    return (
        <Container
            onPress={click}
            width={width}
        >
            <Profile 
                width={width}
            >
                <Hours 
                    adjustFontSizeToFit={true} 
                    numberOfLines={1}
                >
                    {children}
                </Hours>
            </Profile>
            <NotificationPoint
                width={notificationPointWidth}
            />
        </Container>
    )
}