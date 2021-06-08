import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Logo from '../components/toLogin/logo';
import Form from '../components/toLogin/form';
import Buttons from '../components/toLogin/buttons';
import {Dimensions, BackHandler} from 'react-native';

const {width, height} = Dimensions.get('screen')
const screenHeight = Math.round(height);
const inputWidth = Math.round(width * 0.8);


const Login = ({navigation, navigator}) => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState('');

    const [keepSessionOpen, setKeepSessionOpen] = useState(false);
    const [emailIsCorrect, setEmailIsCorrect] = useState(false);
    const [passwordIsCorrect, setPasswordIsCorrect] = useState(false);

    const lol = () => {
        if (navigation.canGoBack()) {
            navigation.pop(); // Go back to the root of the stack
            return true;
        }
        return false;
    }

    //Disable back button
    // useEffect(() => {
    //     BackHandler.addEventListener('hardwareBackPress', () => true)
    //     return BackHandler.removeEventListener('hardwareBackPress', () => true);
    // }, [])

    // useEffect(() => {
    //     BackHandler.addEventListener('hardwareBackPress', () => lol())
    //     return BackHandler.removeEventListener('hardwareBackPress', () => lol());
    // }, []);

    BackHandler.addEventListener('hardwareBackPress', () => lol())
    BackHandler.removeEventListener('hardwareBackPress', () => lol());

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