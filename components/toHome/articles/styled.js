import styled from 'styled-components/native';

export const StyledContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: ${({width}) => width};
    margin-top: 5px;
    padding-bottom: 315px;
    border: 1px solid black;
`;

export const StyledHalfContent = styled.View`
    width: ${({width}) => width};
    align-items: center;
    margin: 5px;
`;

export const StyledArticle = styled.View`
    width: ${({width}) => width};
    margin-bottom: 5px;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
`; 

export const StyledArticleImage = styled.Image`
    width: ${({width}) => width };
    height: ${({width}) => width};
`;

export const StyledArticleText = styled.Text`
    margin-top: 5px;
    margin-bottom: 5px;
`;