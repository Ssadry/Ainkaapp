import React from 'react';
import Header from '../../components/headerToSearch/index';
import Banner from '../toHome/banner/index';
import Slider from '../toHome/slider/index';
import Articles from '../toHome/articles/index';

import { Dimensions, View } from 'react-native';

const WINDOW = 'window';

export default () => {

    const screenSize = {
        width : Dimensions.get(WINDOW).width,
        height : Dimensions.get(WINDOW).height
    }

    return (
        <View style={{flex: 1}}>
            <Header width={screenSize.width}/>
            <Banner screenSize={screenSize}/>
            <Slider/>
            <Articles screenSize={screenSize}/>
        </View>
    )
};