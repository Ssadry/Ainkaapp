import React from 'react';
import {Banner, Text} from './styled';

export default ({screenSize}) => {
    return (
        <Banner width={screenSize.width}>
            <Text>¿Qué quieres aprender hoy?</Text>
        </Banner>
    )
}