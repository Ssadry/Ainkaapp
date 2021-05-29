import React from 'react';
import {Container, Text} from './styled';

export default Button = ({children, click}) => {
    return (
        <Container
            onPress={click}
        >
            <Text>
                {children}
            </Text>
        </Container>
    )
}