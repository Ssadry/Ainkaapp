import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    opacity: ${({disabled}) => disabled ? 0.5 : 1};
`;

export const Text = styled.Text`
    font-size: 15px;
    text-align: center;
    color: black;
    text-decoration: underline;
`;