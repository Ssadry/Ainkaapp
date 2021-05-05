import React from 'react';
import {Article, Image, Text} from './styled';

export default ({width, click, img, children}) => {
    return (
        <Article 
            width={width} 
            onPress={() => click()}
        >
            <Image 
                source={img} 
                width={width}
            />
            <Text>
                {children}
            </Text>
        </Article>
    )
}