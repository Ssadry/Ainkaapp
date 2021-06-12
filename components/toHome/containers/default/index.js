import React, {lazy, Suspense, useState} from 'react';
import {Container, ScrollView} from './styled';
import Banner from './banner';
import Slider from '../../../slider';
import {Text} from 'react-native';

const LazyContent = lazy(() => import('./content'));
const LazyServiceItem = lazy(() => import('../../../slider/item/service'));

const AMOUNT_SLIDER_ITEMS = 9;

export default ({isSearchingOnHome, navigation}) => {
    const [sliderItemWidth, setSliderItemWidth] = useState(0);

    const items = [];
    for (let i = 0; i < AMOUNT_SLIDER_ITEMS; i++)
        items[i] = 
            <Suspense 
                key={i} 
                fallback={<Text>Cargando...</Text>}
            >
                <LazyServiceItem 
                    width={sliderItemWidth}
                    title={'Cocina'}
                />
            </Suspense>
    
    return (
        <ScrollView
            textInputIsOnFocus={isSearchingOnHome}
        >
            <Container>
                <Banner/>
                <Slider
                    numberItemsDisplayed={4}
                    items={items}
                    setItemsWidth={setSliderItemWidth}
                />
                <Suspense 
                    fallback={<Text>Cargando...</Text>}
                >    
                    <LazyContent navigation={navigation}/>
                </Suspense>
            </Container>   
        </ScrollView>
    )
}