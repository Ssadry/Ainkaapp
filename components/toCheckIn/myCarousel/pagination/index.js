import React from 'react';
import {Container, Circle, Text} from './styled';

export default Pagination = ({width, flex, amountItems, currentPage}) => {
    const circles = [];
    for (let i = 0; i < amountItems; i++) 
        circles[i] = 
            <Circle 
                key={i} 
                index={i} 
                currentPage={currentPage}
            >
                <Text
                    index={i} 
                    currentPage={currentPage} 
                >
                    {i + 1}
                </Text>
            </Circle>
    
    return (
        <Container
            width={width}
            flex={flex}
        >
            {
                circles.map(circle => circle)
            }
        </Container>
    )
}