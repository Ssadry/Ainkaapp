import {StyledArticle, StyledArticleImage, StyledArticleText} from '../styled';
import React from 'react';

export default ({width}) => {
    return (
        <StyledArticle width={width}>
            <StyledArticleImage source={require('../../../../assets/icon.png')} width={width}/>
            <StyledArticleText>Soy un textito :D</StyledArticleText>
        </StyledArticle>
    )
}