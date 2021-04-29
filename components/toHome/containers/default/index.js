import React from 'react';
import {Container} from './styled';
import Banner from './banner';
import Slider from './slider';
import Article from './article';
import ScrollToElements from '../../../scrollToElements';
import {Dimensions} from 'react-native';

const WINDOW = 'window';

export default ({searchText}) => {
    const screenSize = {
        width : Dimensions.get(WINDOW).width,
        height : Dimensions.get(WINDOW).height
    }

    const articleWidth = screenSize.width * 0.5 * 0.9;
    
    const articles = [
        <Article width={articleWidth} key={0}/>,
        <Article width={articleWidth} key={1}/>,
        <Article width={articleWidth} key={2}/>,
        <Article width={articleWidth} key={3}/>,
        <Article width={articleWidth} key={4}/>,
        <Article width={articleWidth} key={5}/>,
        <Article width={articleWidth} key={6}/>,
        <Article width={articleWidth} key={7}/>,
        <Article width={articleWidth} key={8}/>
    ];

    return (
        <Container searchText={searchText}>
            <Banner screenSize={screenSize}/>
            <Slider/>
            <ScrollToElements 
                width={screenSize.width} 
                elements={articles} 
                display={'flex'}
            />
        </Container>   
    )
}