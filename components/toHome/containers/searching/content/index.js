import React from 'react';
import {Container} from './styled';

export default ({width, currentState, contentState, children}) => {
    return (
        <Container
            width={width}
            currentState={currentState}
            contentState={contentState}
        >
            {children.map(element => element)}
        </Container>
    )
}