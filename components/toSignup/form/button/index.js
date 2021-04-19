import React from 'react';
import {Container, Text} from './styled';

export default ({click}) => {
    return (
        <Container onPress={() => click()}>
            <Text>
                Crear cuenta
            </Text>
        </Container>
    )
}