import React from 'react';
import {Container, Profile, Text, NotificationPoint} from './styled';

export default Hours = ({
    click = () => alert('click'),
    width = 40,
    children = '3h'
}) => {
    const notificationPointWidth = width * 0.6;
    return (
        <Container
            onPress={click}
            width={width}
        >
            <Profile 
                width={width}
            >
                <Text 
                    adjustFontSizeToFit={true} 
                    numberOfLines={1}
                >
                    {children}
                </Text>
            <NotificationPoint
                width={notificationPointWidth}
            />
            </Profile>
        </Container>
    )
}