import React from 'react';
import Header from '../../components/headerToSearch/index';
import Banner from '../toHome/banner/index';
import Slider from '../toHome/slider/index';
import ScrollToElements from '../scrollToElements/index';
import Article from '../toHome/article/index';

import { Dimensions, View } from 'react-native';

const WINDOW = 'window';

export default () => {

    const screenSize = {
        width : Dimensions.get(WINDOW).width,
        height : Dimensions.get(WINDOW).height
    }

    const articleWidth = screenSize.width * 0.5 * 0.9;
    
    const articles = [
        <Article width={articleWidth}/>,
        <Article width={articleWidth}/>,
        <Article width={articleWidth}/>,
        <Article width={articleWidth}/>,
        <Article width={articleWidth}/>,
        <Article width={articleWidth}/>,
        <Article width={articleWidth}/>,
        <Article width={articleWidth}/>,
        <Article width={articleWidth}/>
    ];

    return (
        <View style={{flex: 1}}>
            <Header width={screenSize.width}/>
            <Banner screenSize={screenSize}/>
            <Slider/>
            <ScrollToElements 
                width={screenSize.width} 
                elements={articles} 
                display={'flex'}
            />
        </View>
    )
};