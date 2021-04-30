import React from 'react';
import Icon from '../../../../../../assets/icon.png';
import { 
    Container, 
    ImageContainer, 
    Image, 
    Text,
    Element
} from './styled';

export default ({ width }) => {
    const elementWidth = width * 0.9;
    const imageWidth = elementWidth * 0.9;
    
    return (
        <Container width={width}>
            <Element width={elementWidth}>
                <ImageContainer width={imageWidth}>
                    <Image source={Icon} width={imageWidth} />
                </ImageContainer>
                <Text>
                    Categoría
                </Text>
            </Element>
        </Container>
    )
}