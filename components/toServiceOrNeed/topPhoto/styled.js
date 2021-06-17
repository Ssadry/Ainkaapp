import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    background-color: blueviolet;
    border: 5px;
`;

export const Line = styled.View`
    position: absolute;
    bottom: 0px;
    height: 1.5px;
    background-color: gray;
    width: ${({width}) => width + 'px'};
`;

export const PhotoServicie = styled.View`
    width: ${({width}) => width + 'px'};
    height: 100px;
    background-color: white;
`;