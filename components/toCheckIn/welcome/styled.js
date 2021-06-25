import styled from 'styled-components/native';
import defaultColors from '../../../assets/colors/defaultColors.json';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    justify-content: space-between;
`;

export const Content = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
`;

export const TextContainer = styled.View`
    justify-content: center;
`;

export const Title = styled.Text`
    text-align: left;
    font-size: 36px;
    margin-bottom: 10px;
    color: ${defaultColors.AzulOscuro};
    font-family: 'QuicksandBold';
`;

export const Subtitle = styled.Text`
    font-size: 24px;
    margin-top: 10px;
    color: ${defaultColors.AzulOscuro};
    text-align: left;
    font-family: 'QuicksandBold';
`;

export const ButtonContainer = styled.View`
    align-self: center;
`;