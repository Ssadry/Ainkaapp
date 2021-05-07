import React from 'react';
import {Container, Text} from './styled';

export default ({ children, borderSide }) => {
    return (
        <Container borderSide={borderSide}>
            <Text>{children}</Text>
        </Container >
    )
}