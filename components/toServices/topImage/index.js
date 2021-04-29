import {ImageBackground, Icons} from './styled';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShareAlt} from '@fortawesome/free-solid-svg-icons';
import Icon from '../../../assets/icon.png';


export default ({width}) => {
    return (
        <ImageBackground source={Icon} width={width}>
            <Icons>
                <FontAwesomeIcon icon={faShareAlt} size={40}/>
            </Icons>
        </ImageBackground>
    )
}