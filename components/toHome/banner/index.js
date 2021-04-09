import React from 'react';
import {Ask, StyledText} from './styled';

export default ({screenSize}) => {
    return (
        <Ask width={screenSize.width}>
            <StyledText>¿Qué quieres aprender hoy?</StyledText>
        </Ask>
    )
}