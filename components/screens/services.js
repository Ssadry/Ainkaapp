import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import TopImage from '../toServices/topImage/index';
import Service from '../toServices/service/index';
import User from '../toServices/user/index';
import Petition from '../toServices/petition/index';

const WINDOW = 'window';

export default () => {

    const screenSize = {
        width : Dimensions.get(WINDOW).width,
        height : Dimensions.get(WINDOW).height
    }

    return (
        <View style={styled.container}>
            <TopImage width={screenSize.width}/>
            <Service/>
            <User/>
            <Petition/>
        </View>
    )
}

const styled = StyleSheet.create({
    container : {
        flex: 1,
        width: Dimensions.get(WINDOW).width
    }
});