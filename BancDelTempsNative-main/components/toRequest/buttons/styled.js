import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    border-width: 1px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 70px;
`;

export const Line = styled.View`
    border-width: 0.5px;
    height: 70px;
`;