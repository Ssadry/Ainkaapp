import styled from 'styled-components/native';

export const SearchBar = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    border: 1px solid black;
    width: ${({width}) => width + 'px'};
    height: 40px;
    overflow: hidden;
`;

export const TextInput = styled.TextInput`
    width: ${({width}) => width + 'px'};
    padding-left: 15px;
    height: 40px;
`;

export const Icon = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
`;