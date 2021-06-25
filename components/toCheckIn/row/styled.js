import styled from 'styled-components/native';
import defaultColors from '../../../assets/colors/defaultColors.json';

export const Container = styled.View`
    flex-direction: ${({pos}) => pos === 'n' ? 'row' : 'row-reverse'};
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const ImageBackground = styled.ImageBackground`
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
`;

export const TextImage = styled.Text`
    text-align: center;
    font-size: 40px;
    color: ${defaultColors.Blanco};
    font-family: 'QuicksandBold';
`;

export const TextContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
`;

export const Title = styled.Text`
    width: ${({width}) => `${width}px`};
    padding-left: 10px;
    padding-right: 10px;
    text-align: left;
    font-size: 20px;
    color: ${defaultColors.Lila};
    flex: 1;
`;

export const Paraph = styled.Text`
    flex: 1;
    color: ${defaultColors.AzulOscuro};
    font-size: 16px;
`;