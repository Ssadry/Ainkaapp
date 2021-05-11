import 'react-native-gesture-handler';
import React from 'react';
import {Dimensions} from 'react-native';
import Navigation from './components/navigation/index';
import Provider from './application/provider';
import PostAdPopUp from './screens/postAd';
import styled from 'styled-components/native';

const WINDOW = 'window';
const {width} = Dimensions.get(WINDOW);
const {height} = Dimensions.get(WINDOW);

export default () => {
    return (
        <Container>
            <Provider>
                <Navigation/>
                <PostAdPopUp/>
            </Provider>
        </Container>
    );
}

export const Container = styled.View`
    width: ${width + 'px'};
    height: ${height + 'px'};
    position: absolute;
    bottom: 0px;
    left: 0px;
`;