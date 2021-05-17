import React, {lazy, Suspense} from 'react';
import {Container} from './styled';
import Banner from './banner';
import Slider from './slider';
import {Dimensions, Text} from 'react-native';

const LazyContent = lazy(() => import('./content'));
const WINDOW = 'window';
const screenSize = {
    width : Dimensions.get(WINDOW).width,
    height : Dimensions.get(WINDOW).height
}

export default ({searchText, navigation}) => (
    <Container searchText={searchText}>
        <Banner screenSize={screenSize}/>
        <Slider/>
        <Suspense fallback={<Text>Cargando..</Text>}>
            <LazyContent 
                width={screenSize.width}
                click={() => navigation.navigate('Services')}
            />
        </Suspense>
    </Container>   
)