import 'react-native-gesture-handler';
import React from 'react';
import {Dimensions, Platform, StatusBar} from 'react-native';
import Navigation from './components/navigation/index';
import Provider from './application/provider';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import QuicksandLight from './assets/fonts/Quicksand-Light.ttf';
import QuicksandSemibold from './assets/fonts/Quicksand-SemiBold.ttf';
import QuicksandBold from './assets/fonts/Quicksand-Bold.ttf';
import RobotoRegular from './assets/fonts/Roboto-Regular.ttf';
import RobotoBold from './assets/fonts/Roboto-Bold.ttf';
import AppLoading from 'expo-app-loading';

const height = Math.round(Dimensions.get('screen').height);

export default () => {
    const [loaded] = useFonts({
        QuicksandLight: QuicksandLight,
        QuicksandSemibold: QuicksandSemibold,
        QuicksandBold: QuicksandBold
    });

    return !loaded ? <AppLoading/> : 
        <Container>
            <Provider>
                <Navigation/>
            </Provider>
        </Container>
}

const Container = styled.SafeAreaView`
    height: ${`${height}px`};
    flex: 1;
    padding-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight}px` : 0};
`;