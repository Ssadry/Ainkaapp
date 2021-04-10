import React from 'react';
import {ScrollView} from 'react-native';
import {Container, Lateral} from './styled';
import Element from './element/index';

export default ({width}) => {
    return (
        <ScrollView>
            <Container width={width}>
                <Lateral width={width / 2}>
                    <Element/>
                    <Element/>
                    <Element/>
                    <Element/>
                    <Element/>
                    <Element/>
                    <Element/>
                    <Element/>
                    <Element/>
                    <Element/> 
                </Lateral>
                <Lateral width={width / 2}>
                    <Element/>
                    <Element/>
                    <Element/>
                    <Element/>
                    <Element/>
                    <Element/>
                    <Element/>
                </Lateral>
            </Container>
        </ScrollView>
    )
}