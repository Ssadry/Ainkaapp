import React, {useContext} from 'react';
import {Container} from './styled';
import Need from '../../../../slider/item/need';
import Featured from '../../../../slider/item/featured';
import SliderWithTitles from '../../../../slider/withTitles';
import { AppContext } from '../../../../../application/provider';

const ITEMS_DISPLAYED = 1.8;

export default ({navigation}) => {
    const [routeName] = useContext(AppContext);
    const [itemsWidth, setItemsWidth] = React.useState(0);

    const myNeeds = [
        {
            title: 'Clases de ganchillo',
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
            hours: 9
        },
        {
            title: 'Necesidad',
            hours: 8
        }
    ];

    const myFeatureds = [
        {
            title: 'Clases de guitarra',
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
            hours: 7
        },
        {
            title: 'Destacado',
            hours: 4
        },
    ];

    const mySliders = [
        {
            items: () => 
                myFeatureds.map((featured, i) => 
                    <Featured 
                        key={i}
                        width={itemsWidth}
                        title={featured.title}
                        hours={featured.hours}
                        click={() => navigation.navigate(routeName.serviceOrNeed, {isNeed: false})}
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
                        title={need.title}
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
            leftText: 'Prueba 1',
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