import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const containerWidth = width * 0.497;
const contentWidth = containerWidth * 0.9;

export const Container = styled.View`
    width: ${containerWidth};
    background-color: orange;
    height: 300px;
    border: 1px solid pink;
`;


export const Element = styled.View`
    width: ${contentWidth};
    background-color: red;
    
`;