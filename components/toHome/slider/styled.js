import styled from 'styled-components/native';

export const Slider = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const SliderButton = styled.TouchableHighlight`
    width: 40px;
    justify-content: center;
    border: 1px solid black;
`;

export const SliderButtonText = styled.Text`
    text-align: center;
    padding: 10px;
`;

export const SliderContent = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
`;

export const SliderElement = styled.View`
    width: 80px;
    border: 1px solid black;
    margin-left: 5px;

    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

export const SliderElementImage = styled.Image`
    border: 1px solid black;
    width: 80px;
    height: 80px;
`;