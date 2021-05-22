import React from 'react';
import {Container, LogoContainer, Logo, Text} from './styled';
import Icon from '../../../assets/icon.png';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import QuicksandRegular from '../../../assets/fonts/Quicksand-Regular.ttf';

export default () => {
    const [fontsLoaded] = useFonts({'QuicksandRegular': QuicksandRegular});

    return !fontsLoaded ? <AppLoading/> : 
        <Container>
            <LogoContainer>
                <Logo source={Icon}/>
            </LogoContainer>
            <Text>
                Bienvenido a Ainkaa
            </Text>
        </Container>
}