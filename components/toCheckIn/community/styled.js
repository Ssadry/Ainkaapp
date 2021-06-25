import styled from 'styled-components/native';
import defaultColors from '../../../assets/colors/defaultColors.json';

export const Container = styled.View`
    padding: 30px;
    justify-content: space-between;
`;

export const Content = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    text-align: left;
    font-size: 30px;
    margin-bottom: 10px;
    font-family: 'QuicksandBold';
    color: ${defaultColors.AzulOscuro};
`;

export const ButtonContainer = styled.View`
    align-self: center;
`;