import React from 'react';
import {Container, Text} from './styled';

export default Button = ({
    children = 'Button',
    click = () => alert('click'),
    color = 'gray'
}) => {
    return (
        <Container
            onPress={click}
            color={color}
        >
            <Text>
                {children}
            </Text>
        </Container>
    )
}