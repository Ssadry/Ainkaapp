import React from 'react';
import {Container, CheckContainer} from './styled';
import Input from '../../form/input';
import Check from '../../form/check';

const isEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default Content = ({
    inputWidth, 
    email, 
    setEmail, 
    password, 
    setPassword, 
    keepSessionOpen, 
    setKeepSessionOpen, 
    setEmailIsCorrect, 
    setPasswordIsCorrect
}) => {
    const checkAndSetEmail = (text) => {
        const isCorrect = isEmail(text);
        setEmail(text);
        setEmailIsCorrect(isCorrect);
        return isCorrect;
    }

    const checkAndSetPassword = (text) => {
        const isCorrect = text.length >= 8;
        setPassword(text);
        setPasswordIsCorrect(isCorrect);
        return isCorrect;
    }
    return (
        <Container>
            <Input 
                width={inputWidth}
                placeHolder={'Correo electrónico *'}
                setValue={checkAndSetEmail}
                value={email}
                isCorrect={isEmail(email)}
                canTextHide={false}
                errorText={'Correo no válido.'}
                keyboardType={'email-address'}
            />
            <Input 
                width={inputWidth}
                placeHolder={'Contraseña *'}
                setValue={checkAndSetPassword}
                value={password}
                isCorrect={password.length >= 8}
                errorText={'Mínimo 8 caracteres.'}
                canTextHide={true}
            />
            <CheckContainer>
                <Check 
                    width={inputWidth}
                    text={'Mantener sesión abierta'}
                    setValue={setKeepSessionOpen}
                    value={keepSessionOpen}
                />
            </CheckContainer>
        </Container>
    )
}