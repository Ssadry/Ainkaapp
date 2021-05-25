import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/toSaved/header';
import Content from '../components/toSaved/content';
import SliderWithTitles from '../components/slider/withTitles';

const ITEMS_DISPLAYED = 1.8;

export default ({navigation}) => {
    const items = [];

    const sliders = [
        {
            numberItemsDisplayed: ITEMS_DISPLAYED,
            items: [],
            setItemsWidth: () => {
                
            },
            leftText: 'Servicios',
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
                            numberItemsDisplayed={slider.numberItemsDisplayed}
                            items={slider.items}
                            setItemsWidth={slider.setItemsWidth}
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