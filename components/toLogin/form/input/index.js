import React from 'react';
import { Container, Input, Title } from './styled';

export default ({ children }) => {
    return (
        <Container>
            <Title>
                {children}
            </Title>
            <Input />
        </Container>
    )
}