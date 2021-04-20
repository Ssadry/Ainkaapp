import React from 'react';
import Icon from '../../../../assets/icon.png';
import { Container, ImageContainer, Image, Text } from './styled';

export default ({ width }) => {
    return (
        <Container>
            <ImageContainer width={width}>
                <Image source={Icon} width={width} />
            </ImageContainer>
            <Text>
                Categoría
            </Text>
        </Container>
    )
}