import React from 'react';
import {Container} from './styled';

const Item = ({width, children}) => {
    return (
        <Container 
            width={width}
        >
            {children}
        </Container>
    )
}

export default Item;