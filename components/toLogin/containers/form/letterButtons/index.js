import React from 'react';
import { Container } from './styled';
import LetterButton from '../../../form/letterButton/index';

export default ({goToSignup, goToHome}) => {
    return (
        <Container>
            <LetterButton click={goToSignup}>
                Crear cuenta
            </LetterButton>
            <LetterButton click={goToHome}>
                ¿Olvidaste la contraseña?
            </LetterButton>
        </Container>
    )
}