import {Slider} from './styled';
import React from 'react';
import {SliderButton, SliderButtonText, SliderContent} from './styled';
import SliderElement from './element/index';

export default () => {
    const handlePress = () => alert('Pressed!');
    const left = "<", right = ">";

    return (
        <Slider>
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