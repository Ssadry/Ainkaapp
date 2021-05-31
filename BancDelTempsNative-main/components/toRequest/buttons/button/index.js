import React from 'react';
import {Container, Text} from './styled';

export default ({width, children, click}) => {
    return (
        <Container 
            width={width}
            onPress={() => click()}
        >
            <Text>
                {children}
            </Text>
        </Container>
    )
}