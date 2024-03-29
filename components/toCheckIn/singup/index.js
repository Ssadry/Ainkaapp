import React, {useState} from 'react';
import {
    Container,
    Title,
    FormContainer,
    ChecksContainer,
    Content,
    BothPasswords
} from './styled';
import Input from '../../form/input';
import Check from '../../form/check';
import FatButtom from '../../form/button/fat';
import {ScrollView} from 'react-native';
// import {signup} from '../../../services';
import defaultColors from '../../../assets/colors/defaultColors.json';
import { addUser, signUp } from '../../../services';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

const isEmpty = (value) => value === '';
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateLenght = (characters, length) => characters.length >= length;

export default Signup = ({changePage}) => {
    const [containerWidth, setContainerWidth] = useState(0);
    let contentWidth = containerWidth * 0.8;

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [privacity, setPrivacity] = useState(false);
    const [upgrade, setUpgrade] = useState(false);

    const [valuesAreCorrect, setValuesAreCorrect] = useState({
       name : false,
       lastName : false,
       email : false,
       password : false,
       confirmPassword : false, 
    });

    const canCreateAccount = !Object.values(valuesAreCorrect).includes(false) && password === confirmPassword;

    const changeCorrectValues = (type, value) => {
        setValuesAreCorrect((prev) => ({
            ...prev,
            [type] : value
        }));
    };

    const inputs = [
        {
            placeHolder: 'Nombre *',
            setValue: (text) => {
                setName(text);
                changeCorrectValues('name', !isEmpty(text));
            },
            value: name,
            canTextHide: false,
            isCorrect: !isEmpty(name),
            errorText: 'Campo obligatorio.',
            keyboardType: 'default',
            maxLength: 30
        },
        {
            placeHolder: 'Apellidos *',
            setValue: (text) => {
                setLastName(text);
                changeCorrectValues('lastName', !isEmpty(text));
            },
            value: lastName,
            canTextHide: false,
            isCorrect: !isEmpty(lastName),
            errorText: 'Campo obligatorio.',
            keyboardType: 'default',
            maxLength: 30
        },
        {
            placeHolder: 'Correo electrónico *',
            setValue: (text) => {
                setEmail(text);
                changeCorrectValues('email', validateEmail(text));
            },
            value: email,
            canTextHide: false,
            isCorrect: validateEmail(email),
            errorText: 'Correo no válido.',
            keyboardType: 'email-address'
        },
        {
            placeHolder: 'Contraseña *',
            setValue: (text) => {
                setPassword(text);
                changeCorrectValues('password', validateLenght(text, 8));
            },
            value: password,
            canTextHide: true,
            isCorrect: validateLenght(password, 8),
            errorText: 'Mínimo 8 caracteres.',
            keyboardType: 'default',
        },
        {
            placeHolder: 'Confirmar contraseña *',
            setValue: (text) => {
                setConfirmPassword(text);
                changeCorrectValues('confirmPassword', validateLenght(text, 8));
            },
            value: confirmPassword,
            canTextHide: true,
            isCorrect: validateLenght(confirmPassword, 8),
            errorText: 'Mínimo 8 caracteres.',
            keyboardType: 'default',
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
            <Container
                onLayout={
                    ({nativeEvent}) => {
                        const {width} = nativeEvent.layout;
                        setContainerWidth(Math.round(width));
                    }
                }
            >
                <ScrollView style={{flex: 1}}>
                    <Content>
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
                            <BothPasswords
                                isVisible={password === confirmPassword}
                            >
                                Las contraseñas no coindiden.
                            </BothPasswords>
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
                            disabled={true}
                            fontSize={17}
                            backgroundColor={defaultColors.Rojo}
                        >
                            INICIAR SESIÓN CON GOOGLE
                        </FatButtom>
                        <FatButtom
                            disabled={!canCreateAccount}
                            click={_ => {
                                if (canCreateAccount) {
                                    signUp(email, password)
                                        .then(_ => {
                                            addUser(name, lastName)
                                                .then(_ => changePage(1))
                                                .catch(err => alert(err));
                                        })
                                        .catch(err => alert(err));
                                }
                            }
                        }
                        >
                            CREAR CUENTA
                        </FatButtom>
                    </Content>
                </ScrollView>
            </Container>
    );
};