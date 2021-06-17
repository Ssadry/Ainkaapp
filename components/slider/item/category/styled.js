import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    width: ${({width}) => width + 'px'};
    padding: 20px;
`;

export const Content = styled.TouchableOpacity`
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
    border-radius: ${({width}) => width * 0.3 + 'px'};
    background-color: ${({backgroundColor}) => backgroundColor};
`;

export const Element = styled.View`
    justify-content: center;
    align-items: center;
    margin: 30px;
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
    margin-top: 30px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Text = styled.Text`
    text-align: center;
    margin-top: 15px;
`;