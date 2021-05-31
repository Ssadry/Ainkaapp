import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
`;

export const Content = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-radius: ${({borderRadius}) => borderRadius + 'px'};
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
`;

export const ImageContainer = styled.View`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
    border-width: 1px;
    overflow: hidden;
    border-radius: ${({width}) => width * 0.5 + 'px'};
    margin-bottom: 15px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;