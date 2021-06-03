import React from 'react';
import {Container} from './styled';
import Item from '../../item';

export default Chats = ({
    currentState,
    pos,
    itemWidth
}) => {
    const items = [
        {
            title: 'Título chat',
            paraph: 'Párrafo',
            isNew: true,
        },
        {
            title: 'Título chat',
            paraph: 'Párrafo',
            isNew: false,
        },
        {
            title: 'Título chat',
            paraph: 'Párrafo',
            isNew: false,
        },
        {
            title: 'Título chat',
            paraph: 'Párrafo',
            isNew: true,
        },
        {
            title: 'Título chat',
            paraph: 'Párrafo',
            isNew: false,
        },
        {
            title: 'Título chat',
            paraph: 'Párrafo',
            isNew: false,
        },
        {
            title: 'Título chat',
            paraph: 'Párrafo',
            isNew: false,
        },
        {
            title: 'Título chat',
            paraph: 'Párrafo',
            isNew: false,
        },
        {
            title: 'Título chat',
            paraph: 'Párrafo',
            isNew: false,
        },
        {
            title: 'Título chat',
            paraph: 'Párrafo',
            isNew: false,
        },
    ]

    return (
        <Container
            currentState={currentState}
            pos={pos}
        >
            {
                items.map((item, i) => 
                    <Item 
                        key={i}
                        width={itemWidth}
                        title={item.title}
                        paraph={item.paraph}
                        isNew={item.isNew}
                    />
                )
            }
        </Container>
    )
}