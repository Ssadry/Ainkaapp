import React from 'react';
import {Container, Title} from './styled';
import Need from '../../../slider/item/need';

export default Needs = ({
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
                ¿Cómo puedes ayudar a David?
            </Title>
            <Need
                width={itemWidth}
            />
            <Need
                width={itemWidth}
            />
            <Need
                width={itemWidth}
            />
            <Need
                width={itemWidth}
            />
            <Need
                width={itemWidth}
            />
        </Container>
    )
}