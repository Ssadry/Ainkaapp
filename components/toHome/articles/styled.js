import styled from 'styled-components/native';

export const StyledContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: green;
    width: ${({width}) => width};
    margin-bottom: 400px;
`;

export const StyledHalfContent = styled.View`
    background-color: gray;
    width: ${({width}) => width};
    align-items: center;
    margin: 5px;
`;

export const StyledArticle = styled.View`
    background-color: pink;
    width: ${({width}) => width};
    height: ${({width}) => width};
    margin-bottom: 5px;
`; 