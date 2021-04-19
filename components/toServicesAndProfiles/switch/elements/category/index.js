import React from 'react';
import {Container, ImageContainer, Image, Text} from './styled';

export default ({width}) => {
    return (
        <Container>
            <ImageContainer width={width}>
                <Image source={require('../../../../../assets/icon.png')} width={width}/>
            </ImageContainer>
            <Text>
                Categoría
            </Text>
        </Container>
    )
}