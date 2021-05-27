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
import Button from './form/button';

export default Signup = ({changePage}) => {
    const [name, setName] = React.useState('');
    const [nacionality, setNacionality] = React.useState('');
    const [phone, setPhone] = React.useState(0);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassowrd] = React.useState('');
    const [privacity, setPrivacity] = React.useState(false);
    const [upgrade, setUpgrade] = React.useState(false);

    const [containerWidth, setContainerWidth] = React.useState(0);
    let contentWidth = containerWidth * 0.8;

    const inputs = [
        {
            placeHolder: 'Nombre y apellidos *',
            setValue: setName,
            value: name,
            canTextHide: false
        },
        {
            placeHolder: 'Nacionalidad *',
            setValue: setNacionality,
            value: nacionality,
            canTextHide: false
        },
        {
            placeHolder: 'Teléfono *',
            setValue: setPhone,
            value: phone,
            canTextHide: false
        },
        {
            placeHolder: 'Correo electrónico *',
            setValue: setEmail,
            value: email,
            canTextHide: false
        },
        {
            placeHolder: 'Contraseña *',
            setValue: setPassword,
            value: password,
            canTextHide: true
        },
        {
            placeHolder: 'Confirmar contraseña *',
            setValue: setConfirmPassowrd,
            value: confirmPassword,
            canTextHide: true
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
    ]

    return (
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
                <Button
                    click={changePage}
                >
                    CREAR CUENTA
                </Button>
            </Content>
        </Container>
    )
}