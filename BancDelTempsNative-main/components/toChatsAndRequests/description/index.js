import React from 'react';
import {Container, Text} from './styled';

export default ({children}) => {
    return (
        <Container>
            <Text>
                {
                    children
                }
            </Text>
        </Container>
    )
}