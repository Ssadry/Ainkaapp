import React from 'react';
import {ScrollView} from 'react-native';
import {Container} from './styled';
import Element from './element/index';

export default ({width, click}) => {
    const halfWidth = width * 0.5;

    const amountElements = 23;
    const elements = [amountElements];
    for (let i = 0; i < amountElements; i++) elements[i] = <Element key={i} click={click} width={halfWidth}/>

    return (
        <ScrollView>
            <Container width={width}>
                {
                    elements.map(element => element)
                }
            </Container>
        </ScrollView>
    )
}