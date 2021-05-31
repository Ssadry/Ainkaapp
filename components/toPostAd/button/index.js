import React from 'react';
import Icon from '../../../assets/icon.png'
import {Container, IconContainer, Image, Text} from './styled';

export default Button = ({
    text = 'Default',
    navigation
}) => {
    return (
        <Container
            onPress={() => navigation.navigate('EditPost', {category: text})}
        >
            <IconContainer>
                <Image source={Icon}/>
            </IconContainer>
            <Text>
                {text}
            </Text>
        </Container>
    )
}