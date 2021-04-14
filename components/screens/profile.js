import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Header from '../toProfile/header/index';
import Services from '../toProfile/services/index';

const WINDOW = 'window';

export default () => {

    const screenSize = {
        width : Dimensions.get(WINDOW).width,
        height : Dimensions.get(WINDOW).height
    }

    return (
        <View style={styled.header}>
            <Header width={screenSize.width}/>
            <Services width={screenSize.width}/>
        </View>
    )
}

const styled = StyleSheet.create({
    header : {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get(WINDOW).width,
    }
});