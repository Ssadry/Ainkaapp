import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
    width: ${({width}) => width + 'px'};
`;

export const Button = styled.TouchableOpacity`
    margin-top: 20px;
    margin-bottom: 60px;
`;

export const Text = styled.Text`
    font-size: 20px;
    text-align: center;
`;

export const Line = styled.View`
    width: ${({width}) => width + 'px'};
    height: 1px;
    background-color: gray;
    position: absolute;
    bottom: 0px;
    left: 0px;;
`;