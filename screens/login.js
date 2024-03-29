import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import Logo from '../components/toLogin/logo';
import Form from '../components/toLogin/form';
import Buttons from '../components/toLogin/buttons';
import {Dimensions} from 'react-native';
import {AppContext} from '../application/provider';
import {removeNavigationScreen} from '../application/navigation';
import { BackHandler } from 'react-native';
import {logOut} from '../services';

const HARDWARE_BACK_PRESS = 'hardwareBackPress';
const {width, height} = Dimensions.get('screen');
const screenHeight = Math.round(height);
const inputWidth = Math.round(width * 0.8);

const Login = ({navigation, route}) => {
    const prevScreen = route?.params?.prevScreen;
    const [routeName, isSearchingOnHome, setIsSearchingOnHome] = useContext(AppContext);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [keepSessionOpen, setKeepSessionOpen] = useState(false);
    const [emailIsCorrect, setEmailIsCorrect] = useState(false);
    const [passwordIsCorrect, setPasswordIsCorrect] = useState(false);
    
    useEffect(() => {
        if (prevScreen != undefined) {
            if (prevScreen === routeName.profile) {
                logOut();
                setIsSearchingOnHome(false);
                removeNavigationScreen(navigation, routeName.bottomNavigation);
            }
            removeNavigationScreen(navigation, prevScreen);
        }

        BackHandler.addEventListener(HARDWARE_BACK_PRESS, () => {
            if (navigation.canGoBack()) {
                navigation.goBack();
                return true;
            }
            BackHandler.exitApp();
            return false;
        });
    });

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
                setEmailIsCorrect={setEmailIsCorrect}
                setPasswordIsCorrect={setPasswordIsCorrect}
            />
            <Buttons
                navigation={navigation}
                emailIsCorrect={emailIsCorrect}
                passwordIsCorrect={passwordIsCorrect}
                email={email}
                password={password}
                keepSessionOpen={keepSessionOpen}
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