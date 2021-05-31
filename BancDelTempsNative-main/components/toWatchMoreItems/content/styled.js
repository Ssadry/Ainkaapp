import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Content = styled.View`
    width: ${({width}) => width + 'px'};
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;