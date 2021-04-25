import React from 'react';
import { Container, Text } from './styled';

export default ({ children, click }) => {
    return (
        <Container onPress={() => click()}>
            <Text>
                {children}
            </Text>
        </Container>
    )
}