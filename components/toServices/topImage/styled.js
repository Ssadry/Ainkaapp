import styled from 'styled-components/native';

export const ImageBackground = styled.ImageBackground`
    height: 200px;
    width: ${({width}) => width + 'px'};
    padding: 10px;
`;

export const Icons = styled.View`
    text-align: right;
    margin-top: 40px;
    flex-direction: row;
    justify-content: space-between;
`;