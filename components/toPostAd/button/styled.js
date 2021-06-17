import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 130px;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 40px;
    background-color: ${({backgroundColor}) => backgroundColor};
`;

export const IconContainer = styled.View`
    overflow: hidden;
    width: 80px;
    height: 80px;
    margin-top: 30px;
    margin-bottom: 20px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Text = styled.Text`
    margin-top: 5px;
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 16px;
`;