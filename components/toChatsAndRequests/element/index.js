import React from 'react';
import {Container, Left, Right, Title, Message} from './styled';

export default ({title, message, photo}) => {
    return (
        <Container> 
            <Left>
                {photo}
            </Left>
            <Right>
                <Title ellipsizeMode='tail' numberOfLines={2}>
                    {title}
                </Title>
                <Message ellipsizeMode='tail' numberOfLines={3}>
                    {message}
                </Message>
            </Right>
        </Container>
    )
}