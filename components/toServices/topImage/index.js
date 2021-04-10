import {ImageBackground, Icons} from './styled';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShareAlt} from '@fortawesome/free-solid-svg-icons';


export default ({width}) => {
    return (
        <ImageBackground source={require('../../../assets/icon.png')} width={width}>
            <Icons>
                <FontAwesomeIcon icon={faShareAlt} size="40px"/>
            </Icons>
        </ImageBackground>
    )
}