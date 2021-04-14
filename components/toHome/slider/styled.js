import styled from 'styled-components/native';

export const Slider = styled.View`
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
`;

export const Content = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
`;

export const Container = styled.View`
    position: relative;
    left: ${({ pos }) => pos};
    flex-direction: row;
`;

export const Element = styled.View`
    width: 80px;
    border: 1px solid black;
    margin-left: 5px;

    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

export const Image = styled.Image`
    border: 1px solid black;
    width: 80px;
    height: 80px;
`;