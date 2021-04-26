import React from 'react';
import {Container, Text} from './styled';
import Close from './close';

export default () => {
    return (
        <Container>
            <Close/>
            <Text>
                Publicar nuevo anuncio
            </Text>
        </Container>
    )
}