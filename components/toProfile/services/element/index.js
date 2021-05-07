import React from 'react';
import {Container, Element, Image, Text, Description, Hours} from './styled';
import Icon from '../../../../assets/icon.png';

export default ({click, width}) => {
    const elementWidth = width * 0.9;

    return (
        <Container 
            onPress={() => click()}
            width={width}
        >
            <Element width={elementWidth}>
                <Image 
                    width={elementWidth}
                    source={Icon} 
                    resizeMode='stretch'
                />
                <Text>
                    <Hours>10 h</Hours>
                    <Description>
                        Esta es la descripción
                    </Description>
                </Text>
            </Element>
        </Container>
    )
}