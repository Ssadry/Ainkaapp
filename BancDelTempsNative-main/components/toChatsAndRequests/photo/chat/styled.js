import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    overflow: hidden;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: ${({width}) => width + 'px'};
    height: ${({height}) => height + 'px'};
    margin: 10px;
`;