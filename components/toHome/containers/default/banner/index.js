import React from 'react';
import {Banner, Text} from './styled';

export default ({screenSize}) => {
    return (
        <Banner width={screenSize.width}>
            <Text adjustFontSizeToFit>¡Qué bien verte de nuevo Carlos!</Text>
        </Banner>
    )
}