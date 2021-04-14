import React from 'react';
import { Container } from './styled';
import LetterButton from '../../../form/letterButton/index';

export default () => {
    return (
        <Container>
            <LetterButton>
                Crear cuenta
            </LetterButton>
            <LetterButton>
                ¿Olvidaste la contraseña?
            </LetterButton>
        </Container>
    )
}