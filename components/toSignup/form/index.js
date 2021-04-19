import React from 'react';
import {Container} from './styled';
import Input from './input';
import Password from './password';

export default () => {
    return (
        <Container>
            <Input placeholder='Nombre y apellidos'/>
            <Input placeholder='Nacionalidad'/>
            <Input placeholder='Teléfono'/>
            <Input placeholder='Correo electrónico'/>
            <Password placeholder='Contraseña'/>
            <Password placeholder='Repite la contraseña'/>
        </Container>
    )
}