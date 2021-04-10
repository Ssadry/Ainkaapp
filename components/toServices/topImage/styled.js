import styled from 'styled-components/native';

export const ImageBackground = styled.ImageBackground`
    height: 200px;
    width: ${({width}) => width};
    flex-direction: row;
    justify-content: flex-end;
`;

export const Icons = styled.View`
    text-align: right;
    margin-right: 20px;
    margin-top: 40px;
`;