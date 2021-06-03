import React from 'react';
import {Container} from './styled';
import Item from '../../item';

export default Requests = ({
    currentState,
    pos,
    itemWidth
}) => {

    const items = [
        {
            title: 'Título solicitud',
            paraph: 'Párrafo',
            isNew: true,
        },
        {
            title: 'Título solicitud',
            paraph: 'Párrafo',
            isNew: true,
        },
        {
            title: 'Título solicitud',
            paraph: 'Párrafo',
            isNew: false,
        },
        {
            title: 'Título solicitud',
            paraph: 'Párrafo',
            isNew: true,
        },
        {
            title: 'Título solicitud',
            paraph: 'Párrafo',
            isNew: true,
        },
        {
            title: 'Título solicitud',
            paraph: 'Párrafo',
            isNew: false,
        },
        {
            title: 'Título solicitud',
            paraph: 'Párrafo',
            isNew: false,
        },
        {
            title: 'Título solicitud',
            paraph: 'Párrafo',
            isNew: false,
        },
        {
            title: 'Título solicitud',
            paraph: 'Párrafo',
            isNew: false,
        },
        {
            title: 'Título solicitud',
            paraph: 'Párrafo',
            isNew: true,
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