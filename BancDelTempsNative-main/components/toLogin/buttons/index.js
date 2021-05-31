import React from 'react';
import {Container, SlimButtons} from './styled';
import FatButton from '../../form/button/fat';
import SlimButton from '../../form/button/slim';

export default Content = () => {
    return (
        <Container>
            <FatButton
                click={() => alert('Iniciar sesión')}
            >
                INICIAR SESIÓN
            </FatButton>
            <SlimButtons>
                <SlimButton
                    click={() => alert('Poh te jodes')}
                >
                    ¿Olvidaste la contraseña?
                </SlimButton>
                <SlimButton
                    click={() => alert('Unido')}
                >
                    Únete a la comunidad AINKAA
                </SlimButton>
            </SlimButtons>
        </Container>
    )
}