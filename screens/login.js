import React, {useState} from 'react';
import styled from 'styled-components/native';
import Logo from '../components/toLogin/logo';
import Form from '../components/toLogin/form';
import Buttons from '../components/toLogin/buttons';
import {Dimensions} from 'react-native';
import { CommonActions } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen')
const screenHeight = Math.round(height);
const inputWidth = Math.round(width * 0.8);

const Login = ({navigation}) => {

    React.useEffect(() => {
        navigation.dispatch((state) => {
            const routes = state.routes.filter(r => r.name !== 'Splash');
            return CommonActions.reset({
                ...state,
                routes,
                index: routes.length - 1,
              });
        });
    });
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [keepSessionOpen, setKeepSessionOpen] = useState(false);
    const [emailIsCorrect, setEmailIsCorrect] = useState(false);
    const [passwordIsCorrect, setPasswordIsCorrect] = useState(false);

    return (
        <Container>
            <Logo/>
            <Form
                inputWidth={inputWidth}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                keepSessionOpen={keepSessionOpen}
                setKeepSessionOpen={setKeepSessionOpen}
                setKeepSessionOpen={setKeepSessionOpen}
                setEmailIsCorrect={setEmailIsCorrect}
                setPasswordIsCorrect={setPasswordIsCorrect}
            />
            <Buttons
                navigation={navigation}
                emailIsCorrect={emailIsCorrect}
                passwordIsCorrect={passwordIsCorrect}
                email={email}
                password={password}
            />
        </Container>
    )
}

export default Login;

const Container = styled.View`
    height: ${screenHeight + 'px'};
    justify-content: center;
    align-items: center;
`;