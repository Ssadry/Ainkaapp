import React, {lazy, Suspense} from 'react';
import {Container} from './styled';
import Banner from './banner';
import Slider from './slider';
import {Dimensions, Text, ScrollView} from 'react-native';

const LazyContent = lazy(() => import('./content'));
const LazySliderItem = lazy(() => import('./slider/element'));

const WINDOW = 'window';
const screenSize = {
    width : Dimensions.get(WINDOW).width,
    height : Dimensions.get(WINDOW).height
}

const AMOUNT_SLIDER_ITEMS = 9;

export default ({searchText, navigation}) => {
    const [sliderItemWidth, setSliderItemWidth] = React.useState(100);

    const items = [];
    for (let i = 0; i < AMOUNT_SLIDER_ITEMS; i++)
        items[i] = 
            <React.Suspense 
                key={i} 
                fallback={<Text>Cargando...</Text>}
            >
                <LazySliderItem width={sliderItemWidth}/>
            </React.Suspense>
    
    return (
        <Container searchText={searchText}>
            <ScrollView>
                <Banner screenSize={screenSize}/>
                <Slider
                    numberItemsDisplayed={4}
                    items={items}
                    setItemsWidth={setSliderItemWidth}
                />
                <Suspense fallback={<Text>Cargando...</Text>}>
                    <LazyContent navigation={navigation}/>
                </Suspense>
            </ScrollView>
        </Container>   
    )
}