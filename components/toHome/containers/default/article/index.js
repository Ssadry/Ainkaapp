import React from 'react';
import {Article, Image, Text, Container} from './styled';

export default ({width, click, img, children}) => {
    const articleWidth = width * 0.9;

    return (
        <Container width={width}>        
            <Article 
                width={articleWidth}
                onPress={() => click()}
            >
                <Image 
                    source={img} 
                    width={articleWidth}
                />
                <Text adjustsFontSizeToFit={true}>
                    {children}
                </Text>
            </Article>
        </Container>
    )
}