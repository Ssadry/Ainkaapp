import React from 'react';
import {Container, Title} from './styled';
import Featured from '../../../slider/item/featured';

export default Servicies = ({
    currentState = 0,
    pos = 0,
    itemWidth = 200,
    isOwnProfile = true
}) => {
    return (
        <Container
            currentState={currentState}
            pos={pos}
        >
            <Title
                isOwnProfile={isOwnProfile}
            >
                ¿Qué puedes intercambiar con David?
            </Title>
            <Featured
                width={itemWidth}
            />
            <Featured
                width={itemWidth}
            />
            <Featured
                width={itemWidth}
            />
            <Featured
                width={itemWidth}
            />
            <Featured
                width={itemWidth}
            />
            <Featured
                width={itemWidth}
            />
            <Featured
                width={itemWidth}
            />
            <Featured
                width={itemWidth}
                />
        </Container>
    )
}