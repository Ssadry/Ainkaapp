import React from 'react';
import {Container} from './styled';
import {ScrollView} from 'react-native';

export default ({width, currentState, contentState, children}) => {
    return (
        <ScrollView>
            <Container
                width={width}
                currentState={currentState}
                contentState={contentState}
            >
                {children.map(element => element)}
            </Container>
        </ScrollView>
    )
}