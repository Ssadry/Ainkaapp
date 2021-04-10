import React from 'react';
import {Container, Image, Text, Description, Hours} from './styled';

export default () => {
    let Image_Http_URL ={ uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'};

    return (
        <Container>
            <Image source={require('../../../../assets/icon.png')} style={{resizeMode: 'stretch'}}/>
            <Text>
                <Hours>10 h</Hours>
                <Description>
                    Esta es la descripción
                </Description>
            </Text>
        </Container>
    )
}