import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const contentWidth = width * 0.9;
const leftWidth = contentWidth * 0.4;
const rightWidth = contentWidth * 0.6;

export const Container = styled.View`
    background-color: white;
    width: ${contentWidth};
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 5px;
    border: 1px solid black;
    height: 150px;
`;

export const Left = styled.View`
    width: ${leftWidth};
    justify-content: center;
`;

export const Right = styled.View`
    width: ${rightWidth};
    padding: 10px;
    overflow: hidden;
    justify-content: center;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;

export const Message = styled.Text`
    margin-top: 10px;
`;