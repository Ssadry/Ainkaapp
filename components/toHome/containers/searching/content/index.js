import React from 'react';
import {Container} from './styled';

export default ({width, currentState, contentState, columns, children}) => {
    const elementWidth = width / columns;

    return (
        <Container
            width={width}
            currentState={currentState}
            contentState={contentState}
        >
            {children.map(element => {
                // element.width = elementWidth + 'px';
                return element;
            })}
        </Container>
    )
}