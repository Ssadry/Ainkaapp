import React from 'react';
import { Logo, Image } from './styled';

export default () => {
    return (
        <Logo>
            <Image source={require('../../../assets/icon.png')} />
        </Logo>
    )
}