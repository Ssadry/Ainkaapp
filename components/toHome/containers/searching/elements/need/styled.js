import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: red;
    width: ${({width}) => width + 'px'};
    height: 100px;
`;