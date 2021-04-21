import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    border: 1px solid black;
    border-radius: 100px;
    margin: 5px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: ${({width}) => width};
    height: ${({height}) => height};
`;