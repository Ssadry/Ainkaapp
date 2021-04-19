import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

export const ImageContainer = styled.View`
    width: ${({width}) => width};
    height: ${({width}) => width};
    margin-bottom: 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 100px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: ${({width}) => width};
    height: ${({width}) => width};
`;

export const Text = styled.Text`
    text-align: center;
`;