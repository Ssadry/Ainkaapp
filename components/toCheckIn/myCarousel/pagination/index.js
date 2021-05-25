import React from 'react';
import {Container, Circle} from './styled';

const Pagination = ({width, amountItems, currentPage}) => {
    const circles = [];
    for (let i = 0; i < amountItems; i++) circles[i] = <Circle key={i} index={i} currentPage={currentPage}/>
    
    return (
        <Container
            width={width}
        >
            {
                circles.map(circle => circle)
            }
        </Container>
    )
}

export default Pagination;