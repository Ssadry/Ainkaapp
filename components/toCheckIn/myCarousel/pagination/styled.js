import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({height}) => height + 'px'};
    background-color: cyan;
`;