import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    border-width: 1px;
`;

export const Element = styled.View`
    justify-content: center;
    align-items: center;
    border-width: 1px;
    margin: 10px;
`;

export const ImageContainer = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    margin-bottom: 10px;
    border-radius: ${({width}) => width + 'px'};
    overflow: hidden;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Text = styled.Text`
    text-align: center;
`;