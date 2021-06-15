import React from 'react';
import Icon from '../../../assets/icon.png'
import {Container, IconContainer, Image, Text} from './styled';

export default Button = ({
    text = 'Default',
    click = () => alert('click')
}) => {

    return (
        <Container
            onPress={click}
        >
            <IconContainer>
                <Image 
                    source={Icon}
                />
            </IconContainer>
            <Text>
                {text}
            </Text>
        </Container>
    )
}