import React from 'react';
import {
    Container,
    Title,
    FormContainer,
    ChecksContainer,
    Content
} from './styled';
import Input from '../../form/input';
import Check from '../../form/check';
import FatButtom from '../../form/button/fat';
import {ScrollView} from 'react-native';

const isEmpty = (value) => value === '';
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateLenght = (characters, length) => characters.length >= length;

export default Signup = ({changePage}) => {
    const [containerWidth, setContainerWidth] = React.useState(0);
    let contentWidth = containerWidth * 0.8;

    const [name, setName] = React.useState('');
    const [nacionality, setNacionality] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const [privacity, setPrivacity] = React.useState(false);
    const [upgrade, setUpgrade] = React.useState(false);

    const inputs = [
        {
            placeHolder: 'Nombre y apellidos *',
            setValue: setName,
            value: name,
            canTextHide: false,
            isCorrect: !isEmpty(name),
            errorText: 'Campo obligatorio.',
            keyboardType: 'default',
            maxLength: 30
        },
        {
            placeHolder: 'Nacionalidad *',
            setValue: setNacionality,
            value: nacionality,
            canTextHide: false,
            isCorrect: !isEmpty(nacionality),
            errorText: 'Campo obligatorio.',
            keyboardType: 'default',
            maxLength: -1
        },
        {
            placeHolder: 'Teléfono *',
            setValue: setPhone,
            value: phone,
            canTextHide: false,
            isCorrect: validateLenght(phone, 9),
            errorText: 'Mínimo 9 dígitos.',
            keyboardType: 'numeric',
            maxLength: 9
        },
        {
            placeHolder: 'Correo electrónico *',
            setValue: setEmail,
            value: email,
            canTextHide: false,
            isCorrect: validateEmail(email),
            errorText: 'Correo no válido.',
            keyboardType: 'email-address'
        },
        {
            placeHolder: 'Contraseña *',
            setValue: setPassword,
            value: password,
            canTextHide: true,
            isCorrect: validateLenght(password, 8),
            errorText: 'Mínimo 8 caracteres.',
            keyboardType: 'default',
            maxLength: 8
        },
        {
            placeHolder: 'Confirmar contraseña *',
            setValue: setConfirmPassword,
            value: confirmPassword,
            canTextHide: true,
            isCorrect: validateLenght(confirmPassword, 8),
            errorText: 'Mínimo 8 caracteres.',
            keyboardType: 'default',
            maxLength: 8
        },
    ];   
    
    const checks = [
        {
            text: 'Al registrarme confirmo los términos de uso, el tratamiento de mis datos y la política de privacidad',
            setValue: setPrivacity,
            value: privacity
        },
        {
            text: 'Acepto recibir actualizaciones, mail comercial y la suscripción a la newsletter',
            setValue: setUpgrade,
            value: upgrade
        }
    ];

    return (
        <ScrollView>
            <Container
                onLayout={
                    ({nativeEvent}) => {
                        const {width} = nativeEvent.layout;
                        setContainerWidth(Math.round(width));
                    }
                }
            >
                    <Content
                        width={contentWidth}
                    >
                        <Title>
                            ¡Estás a un paso de ser parte de AINKAA!
                        </Title>
                        <FormContainer>
                            {
                                inputs.map((input, i) => 
                                    <Input 
                                        key={i} 
                                        width={contentWidth} 
                                        placeHolder={input.placeHolder}
                                        setValue={input.setValue}
                                        value={input.value}
                                        canTextHide={input.canTextHide}
                                        isCorrect={input.isCorrect}
                                        errorText={input.errorText}
                                        keyboardType={input.keyboardType}
                                        maxLength={input.maxLength}
                                    />
                                )
                            }
                        </FormContainer>
                        <ChecksContainer>
                            {
                                checks.map((check, i) =>
                                    <Check 
                                        key={i}
                                        width={contentWidth} 
                                        text={check.text}
                                        setValue={check.setValue}
                                        value={check.value}
                                    />
                                )
                            }
                        </ChecksContainer>
                        <FatButtom
                            click={() => alert('Iniciando sesión con google...')}
                            color='red'
                        >
                            INICIAR SESIÓN CON GOOGLE
                        </FatButtom>
                        <FatButtom
                            click={() => changePage(1)}
                        >
                            CREAR CUENTA
                        </FatButtom>
                    </Content>
            </Container>
        </ScrollView>
    )
}