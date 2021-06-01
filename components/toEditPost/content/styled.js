import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const UploadPhoto = styled.ImageBackground`
    flex: 1;
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
    margin-top: 20px;
`;

export const Title = styled.Text`
    margin-bottom: 5px;
    align-self: flex-start;
`;

export const CategoriesChecksContainer = styled.View`
    flex: 1;
    width: ${({width}) => width + 'px'};
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 25px;
    margin-bottom: 25px;
`;
