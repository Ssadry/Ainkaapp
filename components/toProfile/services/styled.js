import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    width: ${({width}) => width + 'px'};
    flex-wrap: wrap;
`;