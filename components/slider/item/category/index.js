import React from 'react';
import Icon from '../../../../assets/icon.png';
import { 
    Container,
    Content,
    ImageContainer, 
    Image, 
    Text,
    Element
} from './styled';

export default Category = ({ 
    width = 100,
    title = 'Default', 
    click = () => alert('click') 
}) => {
    const contentWidth = width * 0.8;
    const elementWidth = contentWidth * 0.8;
    const imageWidth = elementWidth * 0.8;
    
    return (
        <Container 
            width={width}
        >
            <Content 
                width={contentWidth}
                onPress={click}>
                <Element 
                    width={elementWidth}
                >
                    <ImageContainer 
                        width={imageWidth}
                    >
                        <Image 
                            source={Icon}
                        />
                    </ImageContainer>
                    <Text>
                        {title}
                    </Text>
                </Element>
            </Content>
        </Container>
    )
}