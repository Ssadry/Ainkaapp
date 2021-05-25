import React from 'react';
import {Container} from './styled';
import Item from '../item';

const Card = ({items, itemWidth, height, currentPage}) => {
    return (
        <Container
            width={items.length * itemWidth}
            height={height}
            currentPage={currentPage}
            itemWidth={itemWidth}
        >
            {
                items.map((item, i) => <Item key={i} width={itemWidth} height={height}>{item.screen}</Item>)
            }
        </Container>
    )
}

export default Card;