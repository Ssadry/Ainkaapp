import {SliderElement} from '../styled';
import React from 'react';
import {Text} from 'react-native';
import {SliderElementImage} from '../styled';

export default () => {
    return (
        <SliderElement>
            <SliderElementImage source={require('../../../../assets/favicon.png')}/>
            <Text>Texto</Text>
        </SliderElement>
    )
}