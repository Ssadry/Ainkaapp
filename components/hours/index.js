import React from 'react';
import {Container, Profile, Text, NotificationPoint} from './styled';
import defaultColors from '../../assets/colors/defaultColors.json';

export default Hours = ({
    click = () => alert('click'),
    width = 40,
    children = '3h',
    changeColor = false,
    color = defaultColors.Blanco
}) => {
    const notificationPointWidth = width * 0.6;
    return (
        <Container
            onPress={click}
            width={width}
        >
            <Profile 
                width={width}
                lineColor={changeColor ? defaultColors.Lila : color}
            >
                <Text 
                    adjustFontSizeToFit={true} 
                    numberOfLines={1}
                    lineColor={changeColor ? defaultColors.Lila : color}
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