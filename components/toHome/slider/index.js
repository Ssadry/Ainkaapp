import {Slider} from './styled';
import React from 'react';
import {SliderButton, SliderButtonText, SliderContent} from './styled';
import SliderElement from './element/index';

const HEIGHT_PERCENTAJE = 15;

export default ({screenSize}) => {
    const height = screenSize.height * (HEIGHT_PERCENTAJE / 100);
    const handlePress = () => alert('Pressed!');
    const left = "<", right = ">";

    return (
        <Slider height={height}>
            <SliderButton onPress={handlePress} underlayColor="#DDDDDD">
                <SliderButtonText>{left}</SliderButtonText>
            </SliderButton>
            <SliderContent>
                <SliderElement/>
                <SliderElement/>
                <SliderElement/>
                <SliderElement/>
            </SliderContent>
            <SliderButton onPress={handlePress} underlayColor="#DDDDDD">
                <SliderButtonText>{right}</SliderButtonText>
            </SliderButton> 
        </Slider>
    )
}