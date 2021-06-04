import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Line = styled.View`
    height: 1.5px;
    background-color: gray;
    width: ${({width}) => width + 'px'};
`;

export const PhotoServicie = styled.View`
    height: 130px;
`;