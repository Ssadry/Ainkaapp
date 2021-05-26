import React, {lazy, Suspense} from 'react';
import {Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/toSaved/header';
import SliderWithTitles from '../components/slider/withTitles';
import {dataCategories, dataNeeds, dataFeatured} from '../components/toSaved/data';

const LazyFeatured = lazy(() => import('../components/slider/item/featured'));
const LazyNeed = lazy(() => import('../components/slider/item/need'));
const LazyProfile = lazy(() => import('../components/slider/item/profile'));

const ITEMS_DISPLAYED = 1.8;

export default ({navigation}) => {
    const [itemsWidth, setItemsWidth] = React.useState(100);

    const itemFeatured = dataFeatured.map((df, i) =>
        <Suspense
            key={i}
            fallback={<Text>Cargando destacado...</Text>}
        >
            <LazyFeatured 
                width={itemsWidth}
                title={df.title + ' - ' + i}
                hours={df.hours}
            />   
        </Suspense>
    );

    const itemNeeds = dataNeeds.map((dn, i) =>
        <Suspense
            key={i}
            fallback={<Text>Cargando necesidades...</Text>}
        >
            <LazyNeed 
                width={itemsWidth}
                title={dn.title + ' - ' + i}
                hours={dn.hours}
            />   
        </Suspense>
    );

    const itemProfiles = dataCategories.map((dc, i) =>
        <Suspense
            key={i}
            fallback={<Text>Cargando servicio...</Text>}
        >
            <LazyProfile 
                key={i}
                width={itemsWidth}
                title={dc.title + ' - ' + i}
            />  
        </Suspense> 
    );

    const sliders = [
        {
            items: itemFeatured,
            leftText: 'Destacados',
            rightText: 'Ver más',
        },
        {
            items: itemNeeds,
            leftText: 'Necesidad',
            rightText: 'Ver más',
        },
        {
            items: itemProfiles,
            leftText: 'Perfiles',
            rightText: 'Ver más',
        },
    ];

    return (
        <Container>
            <Header 
                navigation={navigation}
                title={'Guardados'}
            />
            <Content>
                <ScrollView>
                    {
                        sliders.map((slider, i) => 
                            <SliderWithTitles
                                key={i}
                                numberItemsDisplayed={ITEMS_DISPLAYED}
                                items={slider.items.map(item => item)}
                                setItemsWidth={setItemsWidth}
                                leftText={slider.leftText}
                                rightText={slider.rightText}
                                navigation={navigation}
                            />
                        )
                    }
                </ScrollView>
            </Content>
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    flex: 1;
`;