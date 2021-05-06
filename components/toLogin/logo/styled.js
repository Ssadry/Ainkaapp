import styled from 'styled-components/native';

const width = 150, height = 150;

export const Logo = styled.View`
    width: ${width + 'px'};
    height: ${height + 'px'};
    border-radius: 150px;
    overflow: hidden;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;