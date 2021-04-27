import React from 'react';
import Header from '../../components/headerToSearch/index';
import Banner from '../toHome/banner/index';
import Slider from '../toHome/slider/index';
import ScrollToElements from '../scrollToElements/index';
import Article from '../toHome/article/index';
import Default from '../toHome/containers/default';
import Searching from '../toHome/containers/searching';

import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

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
        <Container>
            <Default>
                <Header width={screenSize.width}/>
                <Banner screenSize={screenSize}/>
                <Slider/>
                <ScrollToElements 
                    width={screenSize.width} 
                    elements={articles} 
                    display={'flex'}
                />
            </Default>
            <Searching>
                
            </Searching>
        </Container>
    )
};

export const Container = styled.View`
    flex: 1;
`;