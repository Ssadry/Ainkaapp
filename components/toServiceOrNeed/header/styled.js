import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    background-color: honeydew;
`;

export const Line = styled.View`
    height: 1.5px;
    background-color: gray;
    width: ${({width}) => width + 'px'};
`;

export const PhotoServicie = styled.ImageBackground`
    height: 80px;
`;

export const PhotoProfileContainer = styled.View`
    width: 150px;
    height: 150px;
    border: 1px solid gray;
    border-radius: 20px;
    overflow: hidden;
`;

export const PhotoProfile = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Name = styled.Text`
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Content = styled.View`
    /* position: relative;
    top: -75px; */
    justify-content: center;
    align-items: center;
`;

export const Images = styled.View`
    flex-direction: row;
`;

export const ImageContainer = styled.View`
    width: 35px;
    height: 35px;
    border: 1px solid gray;
    border-radius: 10px;
    overflow: hidden;
    margin-left: 5px;
    margin-right: 5px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%
`;