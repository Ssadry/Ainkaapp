import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    width: ${({width}) => width + 'px'};
`;

export const SearchBar = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
    flex: 1;
`;

export const TextInput = styled.TextInput`
    flex: 0.8;
    padding-left: 20px;
    height: 40px;
`;

export const Icon = styled.View`
    flex: 0.2;
    justify-content: center;
    align-items: center;
`;

export const HoursContainer = styled.View`
    flex: 0.3;
    align-items: flex-end;
    padding-left: 5px;
`;