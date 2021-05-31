import React from 'react';
import {Container} from './styled';
import Need from '../../../../slider/item/need';
import Featured from '../../../../slider/item/featured';
import SliderWithTitles from '../../../../slider/withTitles';

const ITEMS_DISPLAYED = 1.8;

export default ({navigation}) => {
    const [itemsWidth, setItemsWidth] = React.useState(0);

    const myNeeds = [
        {
            title: 'Necesidad',
            hours: 3
        },
        {
            title: 'Necesidad',
            hours: 5
        },
        {
            title: 'Necesidad',
            hours: 8
        },
        {
            title: 'Necesidad',
            hours: 9
        },
        {
            title: 'Necesidad',
            hours: 2
        },
        {
            title: 'Necesidad',
            hours: 10
        },
        {
            title: 'Necesidad',
            hours: 30
        }
    ];

    const myFeatureds = [
        {
            title: 'Destacado',
            hours: 5
        },
        {
            title: 'Destacado',
            hours: 6
        },
        {
            title: 'Destacado',
            hours: 7
        },
        {
            title: 'Destacado',
            hours: 2
        },
        {
            title: 'Destacado',
            hours: 13
        },
        {
            title: 'Destacado',
            hours: 45
        },
    ];

    const mySliders = [
        {
            items: () => 
                myFeatureds.map((featured, i) => 
                    <Featured 
                        key={i}
                        width={itemsWidth}
                        title={featured.title + ' - ' + i}
                        hours={featured.hours}
                    />   
                ),
            leftText: 'Destacados',
            rightText: 'Ver más',
            itemName: Featured.name
        },
        {
            items: () => 
                myNeeds.map((need, i) => 
                    <Need 
                        key={i}
                        width={itemsWidth}
                        title={need.title + ' - ' + i}
                        hours={need.hours}
                    />   
                ),
            leftText: 'Necesidades',
            rightText: 'Ver más',
            itemName: Need.name
        },
        {
            items: () => 
                myNeeds.map((need, i) => 
                    <Need 
                        key={i}
                        width={itemsWidth}
                        title={need.title + ' - ' + i}
                        hours={need.hours}
                    />   
                ),
            leftText: 'Prueba',
            rightText: 'Ver más',
            itemName: Need.name
        },
    ];

    return (
        <Container>
            {
                mySliders.map((mySlider, i) => 
                    <SliderWithTitles 
                        key={i}
                        numberItemsDisplayed={ITEMS_DISPLAYED}
                        items={Object.values(mySlider.items()).map(item => item)}
                        itemName={mySlider.itemName}
                        setItemsWidth={setItemsWidth}
                        leftText={mySlider.leftText}
                        rightText={mySlider.rightText}
                        navigation={navigation}
                    />
                )
            }
        </Container>
    )
}