import React from 'react';
import {Container} from './styled';

const Item = ({width, height, children}) => {
    return (
        <Container 
            width={width}
            height={height}
        >
            {children}
        </Container>
    )
}

export default Item;