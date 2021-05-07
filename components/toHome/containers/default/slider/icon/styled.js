import styled from 'styled-components/native';

export const Container = styled.View`
    width: 40px;
    justify-content: center;
    ${({borderSide}) => borderSide};
`;

export const Text = styled.Text`
    text-align: center;
    padding: 10px;
`;
