import React, {lazy, Suspense} from 'react';
import {Container} from './styled';
import Banner from './banner';
import Slider from '../../../slider';
import {Dimensions, Text, ScrollView} from 'react-native';

const LazyContent = lazy(() => import('./content'));
const LazyServiceItem = lazy(() => import('../../../slider/item/service'));

const WINDOW = 'window';
const screenSize = {
    width : Dimensions.get(WINDOW).width,
    height : Dimensions.get(WINDOW).height
}

const AMOUNT_SLIDER_ITEMS = 9;

export default ({searchText, navigation}) => {
    const [sliderItemWidth, setSliderItemWidth] = React.useState(0);

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
        <ScrollView>
            <Container searchText={searchText}>
                <Banner screenSize={screenSize}/>
                <Slider
                    numberItemsDisplayed={4}
                    items={items}
                    setItemsWidth={setSliderItemWidth}
                />
                <Suspense fallback={<Text>Cargando...</Text>}>
                    
                    <LazyContent navigation={navigation}/>
                </Suspense>
            </Container>   
        </ScrollView>
    )
}