import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const UploadPhoto = styled.ImageBackground`
    width: ${({width}) => width + 'px'};
`;

export const UplodadPhotoText = styled.Text`
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 60px;

`;

export const Line = styled.View`
    width: ${({width}) => width + 'px'};
    height: 1px;
    background-color: gray;
`;

export const Form = styled.View`
    width: ${({width}) => width + 'px'};
    margin-top: 20px;
`;

export const Category = styled.Text`

`;
