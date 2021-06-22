import React from 'react';
import {Container} from './styled';
import Item from '../item';

export default Card = ({items, itemWidth, flex, currentPage}) => {
    return (
        <Container
            width={items.length * itemWidth}
            flex={flex}
            currentPage={currentPage}
            itemWidth={itemWidth}
        >
            {
                items.map((item, i) => <Item key={i} width={itemWidth}>{item.screen}</Item>)
            }
        </Container>
    );
};