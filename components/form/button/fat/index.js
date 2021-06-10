import React from 'react';
import {Container, Text} from './styled';

export default Button = ({
    children = 'Button',
    click = () => alert('click'),
    color = 'rgb(73, 73, 73)',
    width = 300,
    disabled = false 
}) => <Container
    onPress={click}
    color={color}
    width={width}
    disabled={disabled}
>
    <Text>
        {children}
    </Text>
</Container>
