import React from 'react';
import {Container} from './styled';
import Item from '../item';

const Card = ({items, itemWidth, height, currentPos}) => {
    return (
        <Container
            width={items.length * itemWidth}
            height={height}
            currentPos={currentPos}
        >
            {
                items.map((item, i) => <Item key={i} width={itemWidth} height={height}>{item.screen}</Item>)
            }
        </Container>
    )
}

export default Card;