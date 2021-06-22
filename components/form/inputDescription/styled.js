import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const AreaToWrite = styled.Pressable`
    flex: 1;
    border: 1px solid ${({lineColor}) => lineColor};
    border-radius: 10px;
    height: 100px;
    overflow: hidden;
`;

export const TextInput = styled.TextInput`
    margin: 10px;
`;

export const MaxCharacters = styled.Text`
    flex: 1;
    display: ${({maxLength}) => maxLength === null ? 'none' : 'flex'};
    margin-top: 10px;
    text-align: right;
`;