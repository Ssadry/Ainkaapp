import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/toSaved/header';
import Content from '../components/toSaved/content';
import SliderWithTitles from '../components/slider/withTitles';
import Need from '../components/slider/item/need';
import Service from '../components/slider/item/service';
import Category from '../components/slider/item/category';

const ITEMS_DISPLAYED = 1.85;

export default ({navigation}) => {
    const [itemsWidth, setItemsWidth] = React.useState(0);

    const services = [
        {
            title: 'Service',
        },
        {
            title: 'Service',
        },
        {
            title: 'Service',
        },
    ];

    const needs = [
        {
            title: 'Necesidad',
            hours: 6
        },
        {
            title: 'Necesidad',
            hours: 6
        },
        {
            title: 'Necesidad',
            hours: 2
        },
        {
            title: 'Necesidad',
            hours: 56
        },
    ];

    const categories = [
        {
            title: 'Category'
        },
        {
            title: 'Category'
        },
        {
            title: 'Category'
        },
        {
            title: 'Category'
        },
    ]

    const sliders = [
        {
            items: () => 
                categories.map((category, i) => 
                    <Category 
                        key={i}
                        width={itemsWidth}
                        title={category.title + ' - ' + i}
                    />   
                ),
            setItemsWidth: setItemsWidth,
            leftText: 'Category',
            rightText: 'Ver más',
        },
        {
            items: () => 
                services.map((service, i) => 
                    <Service 
                        key={i}
                        width={itemsWidth}
                        title={service.title + ' - ' + i}
                    />   
                ),
            setItemsWidth: setItemsWidth,
            leftText: 'Servicios',
            rightText: 'Ver más',
        },
        {
            items: () => 
                needs.map((need, i) => 
                    <Need 
                        key={i}
                        width={itemsWidth}
                        title={need.title + ' - ' + i}
                        hours={need.hours}
                    />   
                ),
            setItemsWidth: setItemsWidth,
            leftText: 'Necesidad',
            rightText: 'Ver más',
        }
    ]

    return (
        <Container>
            <Header 
                navigation={navigation}
                title={'Guardados'}
            />
            <Content>
                {
                    sliders.map((slider, i) => 
                        <SliderWithTitles
                            key={i}
                            numberItemsDisplayed={ITEMS_DISPLAYED}
                            items={Object.values(slider.items()).map(item => item)}
                            setItemsWidth={setItemsWidth}
                            leftText={slider.leftText}
                            rightText={slider.rightText}
                            navigation={navigation}
                        />
                    )
                }
            </Content>
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`;