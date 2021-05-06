import React from 'react';
import {ScrollView} from 'react-native';
import { Slider, Content, Container } from './styled';
import SliderElement from './element/index';
import Icon from './button/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default () => {
    /*
    const [contentWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [containerPos, setContainerPos] = useState(0);
    const STEP = 50;

    const tooMuchElements = containerWidth < contentWidth;
    const diffBtwnContainerContent = tooMuchElements ? -(contentWidth - containerWidth) : 0;

    const toRight = () => {
        setContainerPos(containerPos <= diffBtwnContainerContent ? diffBtwnContainerContent : containerPos - STEP);
    }

    const toLeft = () => {
        setContainerPos(containerPos >= 0 ? 0 : containerPos + STEP);
    }
    */

    const amountElements = 7;
    const elements = [amountElements];
    for (let i = 0; i < amountElements; i++)
        elements[i] = <SliderElement key={i}/>

    return (
        <Slider>
            <Icon>
                <FontAwesomeIcon icon={faCaretLeft}/>
            </Icon>
            <ScrollView horizontal={true}>
                <Content>
                    <Container 
                        /*
                        pos={containerPos}
                        onLayout={
                            ({nativeEvent}) => {
                                let {width} = nativeEvent.layout;
                                setContainerWidth(-width);
                            }
                        }
                        */
                    >
                        {
                            elements.map(element => element)
                        }
                    </Container>
                </Content>
            </ScrollView>
            <Icon>
                <FontAwesomeIcon icon={faCaretRight}/>
            </Icon>
        </Slider>
    )
}