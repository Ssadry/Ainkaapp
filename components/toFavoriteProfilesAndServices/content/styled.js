import styled from 'styled-components/native';

export const Content = styled.View`
    display: ${({currentState, pos}) => currentState === pos ? 'flex' : 'none'};
    width: ${({width}) => width + 'px'};
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;