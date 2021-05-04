import React from 'react';
import {Article, Image, Text} from './styled';
import Icon from '../../../../../assets/icon.png';

export default ({width, click}) => {
    return (
        <Article 
            width={width} 
            onPress={() => click()}
        >
            <Image source={Icon} width={width}/>
            <Text>Soy un textito :D</Text>
        </Article>
    )
}