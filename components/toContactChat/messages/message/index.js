import React from 'react';
import {Container, Text} from './styled';

export default Message = ({
    children = 'Esto es un mensaje por defecto.'
}) => {
    return (
        <Container>
            <Text>
                {children}
            </Text>
        </Container>
    )
}