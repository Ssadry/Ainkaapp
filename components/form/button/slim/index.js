import React from 'react';
import {Container, Text} from './styled';

export default Button = ({
    children, 
    click, 
    disabled = false,
    color = 'black'
}) => {
    return (
        <Container
            onPress={click}
            disabled={disabled}
        >
            <Text
                color={color}
            >
                {children}
            </Text>
        </Container>
    )
}