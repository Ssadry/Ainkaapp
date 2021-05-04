import React from 'react';
import {Container} from './styled';
import Banner from './banner';
import Slider from './slider';
import Article from './article';
import ScrollToElements from '../../../scrollToElements';
import {Dimensions} from 'react-native';

const WINDOW = 'window';

export default ({searchText, navigation}) => {
    const screenSize = {
        width : Dimensions.get(WINDOW).width,
        height : Dimensions.get(WINDOW).height
    }

    const articleWidth = screenSize.width * 0.5 * 0.9;

    const goToSeeServices = () => {
        navigation.navigate('Services');
    }
    
    const articles = [
        <Article width={articleWidth} key={0} click={goToSeeServices}/>,
        <Article width={articleWidth} key={1} click={goToSeeServices}/>,
        <Article width={articleWidth} key={2} click={goToSeeServices}/>,
        <Article width={articleWidth} key={3} click={goToSeeServices}/>,
        <Article width={articleWidth} key={4} click={goToSeeServices}/>,
        <Article width={articleWidth} key={5} click={goToSeeServices}/>,
        <Article width={articleWidth} key={6} click={goToSeeServices}/>,
        <Article width={articleWidth} key={7} click={goToSeeServices}/>,
        <Article width={articleWidth} key={8} click={goToSeeServices}/>
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