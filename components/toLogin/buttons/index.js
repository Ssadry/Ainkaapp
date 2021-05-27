import React from 'react';
import {Container} from './styled';
import Button from '../../form/button';

export default Content = () => {
    return (
        <Container>
            <Button
                click={() => alert('Iniciar sesión')}
            >
                INICIAR SESIÓN
            </Button>
        </Container>
    )
}