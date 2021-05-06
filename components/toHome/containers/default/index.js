import React from 'react';
import {Container} from './styled';
import Banner from './banner';
import Slider from './slider';
import Content from './content';
import {Dimensions} from 'react-native';

const WINDOW = 'window';

export default ({searchText, navigation}) => {
    const screenSize = {
        width : Dimensions.get(WINDOW).width,
        height : Dimensions.get(WINDOW).height
    }

    return (
        <Container searchText={searchText}>
            <Banner screenSize={screenSize}/>
            <Slider/>
            <Content 
                width={screenSize.width}
                click={() => navigation.navigate('Services')}/>
        </Container>   
    )
}