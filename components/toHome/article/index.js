import {Article, Image, Text} from './styled';
import React from 'react';

export default ({width}) => {
    return (
        <Article width={width}>
            <Image source={require('../../../assets/icon.png')} width={width}/>
            <Text>Soy un textito :D</Text>
        </Article>
    )
}