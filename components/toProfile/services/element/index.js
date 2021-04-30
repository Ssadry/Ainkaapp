import React from 'react';
import {Container, Image, Text, Description, Hours} from './styled';
import Icon from '../../../../assets/icon.png';

export default ({click}) => {
    return (
        <Container onPress={() => click()}>
            <Image source={Icon} style={{resizeMode: 'stretch'}}/>
            <Text>
                <Hours>10 h</Hours>
                <Description>
                    Esta es la descripción
                </Description>
            </Text>
        </Container>
    )
}