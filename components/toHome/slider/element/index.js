import { Element } from '../styled';
import React from 'react';
import { Text } from 'react-native';
import { Image } from '../styled';

export default () => {
    return (
        <Element>
            <Image source={require('../../../../assets/icon.png')} />
            <Text>Texto</Text>
        </Element>
    )
}