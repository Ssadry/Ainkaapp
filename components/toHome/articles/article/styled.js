import styled from 'styled-components/native';

export const Article = styled.View`
    flex: 1;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
`; 

export const Image = styled.Image`
    width: ${({width}) => width};
    height: ${({width}) => width};
    border: 1px solid black;
`;

export const Text = styled.Text`
    margin-top: 5px;
    margin-bottom: 5px;
`;