import React, {lazy, Suspense} from 'react';
import {Container} from './styled';
import Banner from './banner';
import Slider from './slider';
//import Content from './content';
import {Dimensions, Text} from 'react-native';

const WINDOW = 'window';
const LazyContent = lazy(() => import('./content'));

export default ({searchText, navigation}) => {
    const screenSize = {
        width : Dimensions.get(WINDOW).width,
        height : Dimensions.get(WINDOW).height
    }

    return (
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
}