import styled from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

export const Banner = styled.View`
    width: ${({width}) => width};
    justify-content: center;
`;

export const Text = styled.Text`
    text-align: center;
    font-size: 25px;
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: ${RFValue(20, 580)};
`;