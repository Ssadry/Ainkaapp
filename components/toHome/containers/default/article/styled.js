import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: ${({width}) => width + 'px'};
    justify-content: center; 
    align-items: center;
`;

export const Article = styled.TouchableOpacity`
    width: ${({width}) => width + 'px'};
    border: 1px solid black;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;
`; 

export const Image = styled.Image`
    width: ${({width}) => width + 'px'};
    height: ${({width}) => width + 'px'};
`;

export const Text = styled.Text`
    font-size: ${RFValue(10, 500) + 'px'};
    margin-top: 5px;
    margin-bottom: 5px;
`;