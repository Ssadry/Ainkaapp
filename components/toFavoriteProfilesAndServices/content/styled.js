import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    display: ${({currentState, pos}) => currentState === pos ? 'flex' : 'none'};
`;