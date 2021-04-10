import styled from 'styled-components/native';

export const StyledView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    border: 1px solid black;
    width: ${({width}) => width};
    height: 40px;
`;

export const StyledTextInput = styled.TextInput`
    width: ${({width}) => width};
    padding-left: 15px;
`;

export const Icon = styled.View`
    justify-content: center;
    align-items: center;
`;