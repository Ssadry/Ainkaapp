import React from 'react';
import { Text } from 'react-native';
import { Container, Content, ImageContainer, Image } from './styled';
import Icon from '../../../../../../assets/icon.png';

export default ({width}) => {
    const contentWidth = width * 0.8;
    const imagenContainerWidth = contentWidth * 0.5;
    const borderRadiusContent = imagenContainerWidth * 0.5;

    return (
        <Container width={width}>
            <Content 
                width={contentWidth}
                borderRadius={borderRadiusContent}
            >
                <ImageContainer width={imagenContainerWidth}>
                    <Image source={Icon}/>
                </ImageContainer>
                <Text>Cocina</Text>
            </Content>
        </Container>
    )
}