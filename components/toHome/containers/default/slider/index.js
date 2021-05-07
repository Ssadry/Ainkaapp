import React from 'react';
import {ScrollView} from 'react-native';
import { Slider, Content, Container } from './styled';
import SliderElement from './element/index';
import Icon from './icon/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default () => {
    const amountElements = 7;
    const elements = [amountElements];
    for (let i = 0; i < amountElements; i++)
        elements[i] = <SliderElement key={i}/>

    return (
        <Slider>
            <Icon borderSide={'border-right-width: 1px'}>
                <FontAwesomeIcon icon={faCaretLeft}/>
            </Icon>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
            >
                <Content>
                    <Container>
                        {
                            elements.map(element => element)
                        }
                    </Container>
                </Content>
            </ScrollView>
            <Icon borderSide={'border-left-width: 1px'}>
                <FontAwesomeIcon icon={faCaretRight}/>
            </Icon>
        </Slider>
    )
}