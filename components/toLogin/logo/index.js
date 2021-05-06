import React from 'react';
import { Logo, Image } from './styled';
import Icon from '../../../assets/Foto_perfl_usuario.jpg';

export default () => {
    return (
        <Logo>
            <Image source={Icon}/>
        </Logo>
    )
}