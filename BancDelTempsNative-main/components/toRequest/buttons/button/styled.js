import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: ${({width}) => width + 'px'};
`;

export const Text = styled.Text`
    text-align: center;
    margin: 20px;
`;