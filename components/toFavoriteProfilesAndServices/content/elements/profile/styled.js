import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const containerWidth = width * 0.497;
const contentWidth = containerWidth * 0.9;

const containerHeight = 300;
const contentHeight = containerHeight * 0.9;

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

export const Photo = styled.Image`
    width: ${contentWidth + 'px'};
    height: ${contentHeight * 0.65 + 'px'};
`;

export const Title = styled.Text`

`;

export const Hours = styled.Text`

`;

export const TitleAndHours = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
`;

export const Description = styled.Text`
    margin-left: 10px;
    margin-right: 10px;
`;