import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const WINDOW = 'window';

const screen = {
    width : Dimensions.get(WINDOW).width,
    height : Dimensions.get(WINDOW).height
}

const contentWidth = screen.width * 0.7;

export const Container = styled.View`
    position: ${({isVisible}) => isVisible ? 'absolute' : 'relative'};;
    bottom: 0px;
    left: 0px;
    width: ${screen.width + 'px'};
    height: ${screen.height + 'px'};
    justify-content: center;
    align-items: center;
    display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
`

export const Background = styled.TouchableOpacity`
    width: ${screen.width + 'px'};
    height: ${screen.height + 'px'};
    position: relative;
    top: 0px;
    left: 0px;
    background-color: rgba(1, 1, 1, 0.5);
    z-index: 0;
`

export const Content = styled.View`
    position: absolute;
    width: ${contentWidth + 'px'};
    border-width: 1px;
    background-color: white;
    border-radius: 20px;
    z-index: 1;
`;

export const Question = styled.Text`
    font-size: 20px;
    text-align: center;
    margin: 10px;
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    margin: 20px;
`;

export const Line = styled.View`
    width: 1px;
    height: 30px;
    border-width: 0.5px;
`;