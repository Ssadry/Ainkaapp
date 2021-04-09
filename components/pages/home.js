import React from 'react';
import Header from '../toHome/header/index';
import Ask from '../toHome/banner/index';
import Slider from '../toHome/slider/index';
import Articles from '../toHome/articles/index';

import styled from 'styled-components';
import { Dimensions } from 'react-native';

const WINDOW = 'window';

export default () => {

    const screenSize = {
        width : Dimensions.get(WINDOW).width,
        height : Dimensions.get(WINDOW).height
    }

    return (
        <Container>
            <Header screenSize={screenSize}/>
            <Ask screenSize={screenSize}/>
            <Slider screenSize={screenSize}/>
            <Articles screenSize={screenSize}/>
        </Container>
    )
};

const Container = styled.View`
    flex: 1;
`;