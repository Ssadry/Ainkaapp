import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: ${({width}) => width + 'px'};
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: ${({color}) => color};
`;

export const Text = styled.Text`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    text-align: center;
    color: white;
    font-weight: bold;
`;