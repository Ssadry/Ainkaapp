import {ImageBackground, Icons} from './styled';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShareAlt} from '@fortawesome/free-solid-svg-icons';
import Icon from '../../../assets/icon.png';
import GoToBackButton from '../../goToBackButton';

export default ({width, navigation}) => {
    return (
        <ImageBackground source={Icon} width={width}>
            <Icons>
                <GoToBackButton navigation={navigation}/>
                <FontAwesomeIcon icon={faShareAlt} size={40}/>
            </Icons>
        </ImageBackground>
    )
}