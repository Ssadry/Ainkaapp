import styled from 'styled-components/native';

export const Articles = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 315px;
    border: 1px solid black;
`;

export const Column = styled.View`
    width: ${({width}) => width};
    align-items: center;
    margin: 5px;
`;