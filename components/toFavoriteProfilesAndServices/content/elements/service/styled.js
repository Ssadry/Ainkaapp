import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const containerWidth = width * 0.497;
const contentWidth = containerWidth * 0.9;

const containerHeight = 400;
const contentHeight = containerHeight * 0.9;

const containerPhotoSize = contentWidth * 0.7;

export const Container = styled.View`
    width: ${containerWidth + 'px'};
    height: ${containerHeight + 'px'};
    justify-content: center;
    align-items: center;
`;

export const Element = styled.View`
    width: ${contentWidth + 'px'};
    height: ${contentHeight + 'px'};
    border: 1px solid black;     
    overflow: hidden;
`;

export const Top = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Bottom = styled.View`
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const PhotoContainer = styled.View`
    height: ${containerPhotoSize + 'px'};
    width: ${containerPhotoSize + 'px'};
    overflow: hidden;
    border-radius: 600px;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const Photo = styled.Image`
    width: ${containerPhotoSize + 'px'};
    height: ${containerPhotoSize + 'px'};
`;

export const UserName = styled.Text`
    font-size: 15px;
`;

export const StarsContainer = styled.View`
    flex-direction: row;
`;

export const Description = styled.Text`
    margin-top: 10px;
`;

export const ContainerInterests = styled.View`
    flex-direction: row;
    margin-top: 10px;
    flex-wrap: wrap;
    align-items: center;
`;

export const Interest = styled.View`
    border: 1px solid black;
    margin: 2px;
`;

export const InterestText = styled.Text`
    margin: 2px;
`;