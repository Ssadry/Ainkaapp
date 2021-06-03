import React from 'react';
import {Container, Text} from './styled';

export default Button = ({
    children = 'Button',
    click = () => alert('click'),
    color = 'gray',
    width = 300
}) => {
    return (
        <Container
            onPress={click}
            color={color}
            width={width}
        >
            <Text>
                {children}
            </Text>
        </Container>
    )
}