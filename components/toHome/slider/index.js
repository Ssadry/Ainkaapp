import React, { useState } from 'react';
import { Slider, Content, Container } from './styled';
import SliderElement from './element/index';
import Button from './button/index';

export default () => {
    const [contentWidth, setContentWidth] = useState(0);

    const [containerWidth, setContainerWidth] = useState(0);
    const [containerPos, setContainerPos] = useState(0);
    const STEP = 20;

    const tooMuchElements = containerWidth < contentWidth;
    const diffBtwnContainerContent = tooMuchElements ? -(contentWidth - containerWidth) : 0;

    const toRight = () => {
        setContainerPos(containerPos <= diffBtwnContainerContent ? diffBtwnContainerContent : containerPos - STEP)
    }

    const toLeft = () => {
        setContainerPos(containerPos >= 0 ? 0 : containerPos + STEP);
    }
    const left = "<", right = ">";

    return (
        <Slider>
            <Button handlePress={toLeft}>
                {left}
            </Button>
            <Content onLayout={({ nativeEvent }) => {
                let { width } = nativeEvent.layout;
                setContentWidth(-width);
            }}>
                <Container pos={containerPos}
                    onLayout={({ nativeEvent }) => {
                        let { width } = nativeEvent.layout;
                        setContainerWidth(-width);
                    }}>
                    <SliderElement />
                    <SliderElement />
                    <SliderElement />
                    <SliderElement />
                    <SliderElement />
                    <SliderElement />
                    <SliderElement />
                    <SliderElement />
                </Container>
            </Content>
            <Button handlePress={toRight}>
                {right}
            </Button>
        </Slider>
    )
}