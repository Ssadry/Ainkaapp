import React from 'react';
import {Banner, StyledText} from './styled';

export default ({screenSize}) => {
    return (
        <Banner width={screenSize.width}>
            <StyledText>¿Qué quieres aprender hoy?</StyledText>
        </Banner>
    )
}