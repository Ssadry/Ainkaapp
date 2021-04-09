import styled from 'styled-components/native';

export const Slider = styled.View`
    background-color: red;
    flex-direction: row;
    justify-content: space-between;
`;

export const SliderButton = styled.TouchableHighlight`
    width: 40px;
    justify-content: center;
`;

export const SliderButtonText = styled.Text`
    text-align: center;
    padding: 10px;
`;

export const SliderContent = styled.View`
    flex: 1;
    flex-direction: row;
    background-color: cyan;
    align-items: center;
    overflow: hidden;
`;

export const SliderElement = styled.View`
    background-color: red;
    width: 90px;

    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

export const SliderElementImage = styled.Image`
    background-color: green;
    width: 90px;
    height: 90px;
`;