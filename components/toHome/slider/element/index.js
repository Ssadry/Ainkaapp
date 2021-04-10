import {SliderElement} from '../styled';
import React from 'react';
import {Text} from 'react-native';
import {SliderElementImage} from '../styled';

export default () => {
    return (
        <SliderElement>
            <SliderElementImage source={require('../../../../assets/icon.png')} style={{resizeMode: 'stretch'}}/>
            <Text>Texto</Text>
        </SliderElement>
    )
}