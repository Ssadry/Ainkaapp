import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: center; 
    align-items: center;
`;

export const Article = styled.TouchableOpacity`
    width: ${({width}) => width + 'px'};
    border: 1px solid black;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
`; 

export const Image = styled.Image`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
`;

export const Text = styled.Text`
    margin: 5px;
    text-align: center;
`;