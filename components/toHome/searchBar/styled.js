import styled from 'styled-components/native';

export const StyledView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    border: 1px solid black;
    width: ${({width}) => width};
    height: 40px;
    margin: 50px 5px 5px 5px;
`;

export const StyledTextInput = styled.TextInput`
    background-color: transparent;
    width: ${({width}) => width};
    padding-left: 15px;
`;

export const StyledImage = styled.View`
    width: ${({width}) => width};
    height: 40px;
    background-color: gray;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 1px solid black;
`;