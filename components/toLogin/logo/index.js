import React from 'react';
import {Container, Image} from './styled';
import Icon from '../../../assets/icon.png';
import { LogoIcon } from '../../../assets/svg/icon';

export default Logo = () => {
    return (
        <Container>
            <LogoIcon
                size={150}
            />
        </Container>
    )
}