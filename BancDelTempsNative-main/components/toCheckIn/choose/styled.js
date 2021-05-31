import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 30px;
    margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
    border-width: 1px;
    justify-content: center;
    align-items: center;
    width: 300px;
    border-radius: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const ButtonTitle = styled.Text`
    margin-top: 20px;
    font-size: 30px;
    font-weight: bold;
`;

export const ButtonDescription = styled.Text`
    margin-bottom: 20px;
    font-size: 25px;
`;

export const NextButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 0px;
`;

export const NextText = styled.Text`
    font-size: 20px;
`;