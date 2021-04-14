import React from 'react';
import { FormContainer } from './styled';
import Button from '../../../toLogin/form/button/index';
import Input from '../../../toLogin/form/input/index';
import LetterButtonsContainer from '../form/letterButtons/index';

export default ({ navigation }) => {
    const goToHome = () => {
        navigation.navigate('Home');
    }
    return (
        <FormContainer>
            <Input>
                Correo electrónico
            </Input>
            <Input>
                Contraseña
            </Input>
            <Button click={goToHome}>
                INICIAR SESIÓN
            </Button>
            <LetterButtonsContainer />
        </FormContainer>
    )
}