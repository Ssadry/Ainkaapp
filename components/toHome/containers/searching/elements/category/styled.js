import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const Element = styled.View`
    justify-content: center;
    align-items: center;
`;

export const ImageContainer = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    margin-bottom: 10px;
    background-color: white;
    border-radius: 100px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

export const Image = styled.Image`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
`;

export const Text = styled.Text`
    text-align: center;
`;