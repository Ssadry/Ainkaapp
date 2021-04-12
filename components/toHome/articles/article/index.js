import {Article, Image, Text} from './styled';
import React from 'react';

export default ({width}) => {
    return (
        <Article width={width * 0.8}>
            <Image source={require('../../../../assets/icon.png')} width={width * 0.8}/>
            <Text>Soy un textito :D</Text>
        </Article>
    )
}