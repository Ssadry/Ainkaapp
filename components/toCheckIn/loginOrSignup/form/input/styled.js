import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 10px;
`;

export const Title = styled.Text`
    margin-bottom: 10px;
`;

export const TextInput = styled.TextInput`
    border-width: 1px;
    border-radius: 10px;
    height: 40px;
    width: ${({width}) => width + 'px'};
    /* background-color: rgb(211, 211, 211); */
`;