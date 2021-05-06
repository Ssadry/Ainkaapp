import React, { useState } from 'react';
import {ScrollView} from 'react-native';
import { Slider, Content, Container } from './styled';
import SliderElement from './element/index';
import Button from './button/index';

export default () => {
    const [contentWidth] = useState(0);

    const [containerWidth, setContainerWidth] = useState(0);
    const [containerPos, setContainerPos] = useState(0);
    const [offsetScroll, setOffsetScroll] = useState(0);
    const STEP = 50;

    const tooMuchElements = containerWidth < contentWidth;
    const diffBtwnContainerContent = tooMuchElements ? -(contentWidth - containerWidth) : 0;

    const toRight = () => {
        setContainerPos(containerPos <= diffBtwnContainerContent ? diffBtwnContainerContent : containerPos - STEP);
        alert("Container pos: " + containerPos + " | " + "OffsetScroll: " + offsetScroll);
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
            <ScrollView 
                horizontal={true}
                onScroll={(event) => {
                    const {x} = event.nativeEvent.contentOffset;
                    setOffsetScroll(x);
                }}
                >
                <Content>
                    <Container 
                        pos={containerPos}
                        onLayout={({ nativeEvent }) => {
                            let { width } = nativeEvent.layout;
                            setContainerWidth(-width );
                        }}
                    >
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
            </ScrollView>
            <Button handlePress={toRight}>
                {right}
            </Button>
        </Slider>
    )
}