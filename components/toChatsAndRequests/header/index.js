import React from 'react';
import { Container, NameScreen } from './styled';
import GoToBackButton from '../../goToBackButton';

export default () => {
    return (
        <Container>
            <GoToBackButton />
            <NameScreen>
                Tu bandeja
            </NameScreen>
        </Container>
    )
}