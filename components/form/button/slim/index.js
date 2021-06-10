import React from 'react';
import {Container, Text} from './styled';

export default Button = ({
    children, 
    click, 
    disabled = false
}) => {
    return (
        <Container
            onPress={click}
            disabled={disabled}
        >
            <Text>
                {children}
            </Text>
        </Container>
    )
}