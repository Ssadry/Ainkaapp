import { Element } from '../styled';
import React from 'react';
import { Text } from 'react-native';
import { Image } from '../styled';
import Icon from '../../../../../../assets/icon.png';

export default () => {
    return (
        <Element>
            <Image source={Icon} />
            <Text>Texto</Text>
        </Element>
    )
}