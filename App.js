import 'react-native-gesture-handler';
import React from 'react';
import {Dimensions, Platform, StatusBar} from 'react-native';
import Navigation from './components/navigation/index';
import Provider from './application/provider';
import styled from 'styled-components/native';

export default () => {
    return (
        <Container>
            <Provider>
                <Navigation/>
            </Provider>
        </Container>
    );
}

const Container = styled.SafeAreaView`
    height: ${Dimensions.get('screen').height + 'px'};
    flex: 1;
    padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight + 'px' : 0};
`;