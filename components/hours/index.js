import React from 'react';
import {Container, Profile, Text, NotificationPoint} from './styled';
import defaultColors from '../../assets/colors/defaultColors.json';

export default Hours = ({
    click = () => alert('click'),
    width = 40,
    children = '3h',
    changeColor = false,
}) => {
    const notificationPointWidth = width * 0.6;
    return (
        <Container
            onPress={click}
            width={width}
        >
            <Profile 
                width={width}
                lineColor={changeColor ? defaultColors.AzulOscuro : defaultColors.Blanco}
            >
                <Text 
                    adjustFontSizeToFit={true} 
                    numberOfLines={1}
                    lineColor={changeColor ? defaultColors.AzulOscuro : defaultColors.Blanco}
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