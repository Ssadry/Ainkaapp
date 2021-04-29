import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

export const Article = styled.View`
    border: 1px solid black;
    align-items: center;
    margin: 5px;
    overflow: hidden;
`; 

export const Image = styled.Image`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
`;

export const Text = styled.Text`
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: ${RFValue(10, 500) + 'px'};
`;