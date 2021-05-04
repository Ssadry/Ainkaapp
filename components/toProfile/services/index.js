import React from 'react';
import {ScrollView} from 'react-native';
import {Container, Lateral} from './styled';
import Element from './element/index';

export default ({width, click}) => {
    const lateralWidth = width * 0.5;

    return (
        <ScrollView>
            <Container width={width}>
                <Lateral width={lateralWidth}>
                    <Element key={0} click={click}/>
                    <Element key={1} click={click}/>
                    <Element key={2} click={click}/>
                    <Element key={3} click={click}/>
                    <Element key={4} click={click}/>
                    <Element key={5} click={click}/>
                    <Element key={6} click={click}/>
                    <Element key={7} click={click}/>
                    <Element key={8} click={click}/>
                    <Element key={9} click={click}/> 
                </Lateral>
                <Lateral width={lateralWidth}>
                    <Element key={0} click={click}/>
                    <Element key={1} click={click}/>
                    <Element key={2} click={click}/>
                    <Element key={3} click={click}/>
                    <Element key={4} click={click}/>
                    <Element key={5} click={click}/>
                    <Element key={6} click={click}/>
                </Lateral>
            </Container>
        </ScrollView>
    )
}