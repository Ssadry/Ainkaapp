import styled from 'styled-components/native';

export const Articles = styled.View`
    flex: 1;
    flex-direction: row;
    padding-bottom: 315px;
    border: 1px solid black;
`;

export const Column = styled.View`
    flex: 1;
    width: ${({width}) => width};
    align-items: center;
    margin: 4px;
`;