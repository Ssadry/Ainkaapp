import styled from 'styled-components/native';
import defaultColors from '../../../../assets/colors/defaultColors.json';

export const Container = styled.View`
    flex: ${({flex}) => flex};
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Circle = styled.View`
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 15px;
    width: 30px;
    height: 30px;
    border: ${({index, currentPage}) => index === currentPage ? `2px solid ${defaultColors.Lila}` : `0px solid ${defaultColors.GrisOscuro}`};
`;

export const Text = styled.Text`
    color: ${({index, currentPage}) => index === currentPage ? defaultColors.Lila : 'gray'};
    text-align: center;
    font-size: 18px;
    font-weight: ${({index, currentPage}) => index === currentPage ? 'bold' : 'normal'};
`;