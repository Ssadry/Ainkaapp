import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    display: ${({currentState, contentState}) => currentState === contentState ? 'flex' : 'none'};
    flex: 1;
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
`;