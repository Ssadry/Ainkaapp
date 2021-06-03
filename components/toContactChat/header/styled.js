import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const Profile = styled.View`
    justify-content: center;
    align-items: center;
`;

export const PhotoContainer = styled.View`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    border-width: 1px;
    overflow: hidden;
`;

export const Photo = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Name = styled.Text`
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
`;

export const AllImagesContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

export const ImageContainer = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border-width: 1px;
    margin-left: 5px;
    margin-right: 5px;
    overflow: hidden;
`;

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Line = styled.View`
    height: 1.5px;
    background-color: gray;
    width: ${({width}) => width + 'px'};
`;