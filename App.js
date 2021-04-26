import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './components/navigation/index';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const WINDOW = 'window';

const {width} = Dimensions.get('window');
const height = Dimensions.get('window').height * 0.9;

export default () => {
    global.postAdIsActived = false;
    return (
        <>
            <Navigation/>
            <PopUp isActived={global.postAdIsActived}/>
        </>
    );
}

export const PopUp = styled.View`
    position: ${global.postAdIsActived ? 'absolute' : 'relative'};
    bottom: 70px;
    right: 0px;
    width: ${width + 'px'};
    height: ${height + 'px'};
    border: 1px solid black;
    background-color: red;
    z-index: 5;
    display: ${global.postAdIsActived ? 'flex' : 'none'};
`;