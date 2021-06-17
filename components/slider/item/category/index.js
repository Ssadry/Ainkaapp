import React from 'react';
import { 
    Container,
    Content,
    ImageContainer, 
    Image, 
    Text,
    Element
} from './styled';
import defaultColors from '../../../../assets/colors/defaultColors.json';

export default Category = ({ 
    width = 100,
    title = 'Default', 
    click = () => alert('click'),
    image
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
                onPress={click}
                backgroundColor={defaultColors.Blanco}
                style={{elevation: 2}}
            >
                <Element 
                    width={elementWidth}
                >
                    {image}
                    <Text
                        numberOfLines={1}
                    >
                        {title}
                    </Text>
                </Element>
            </Content>
        </Container>
    )
}