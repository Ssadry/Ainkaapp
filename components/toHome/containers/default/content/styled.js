import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: red;
    width: ${({width}) => width + 'px'};
`;