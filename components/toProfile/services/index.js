import React from 'react';
import {ScrollView} from 'react-native';
import {Container, Lateral} from './styled';
import Element from './element/index';

export default ({width, click}) => {
    return (
        <ScrollView>
            <Container width={width}>
                <Lateral width={width / 2}>
                    <Element click={click}/>
                    <Element click={click}/>
                    <Element click={click}/>
                    <Element click={click}/>
                    <Element click={click}/>
                    <Element click={click}/>
                    <Element click={click}/>
                    <Element click={click}/>
                    <Element click={click}/>
                    <Element click={click}/> 
                </Lateral>
                <Lateral width={width / 2}>
                    <Element click={click}/>
                    <Element click={click}/>
                    <Element click={click}/>
                    <Element click={click}/>
                    <Element click={click}/>
                    <Element click={click}/>
                    <Element click={click}/>
                </Lateral>
            </Container>
        </ScrollView>
    )
}