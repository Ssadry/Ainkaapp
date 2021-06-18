import React, {useContext} from 'react';
import {Container} from './styled';
import Need from '../../../../slider/item/need';
import Services from '../../../../slider/item/featured';
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

    const art = [
        {
            title: 'Aprende cerámica',
            hours: 5
        },
        {
            title: 'Dibujo digital',
            hours: 6
        },
        {
            title: 'Clases de pintura',
            hours: 7
        },
        {
            title: 'Clases de body paint',
            hours: 2
        },
        {
            title: 'Sesión de patronaje',
            hours: 7
        },
        {
            title: 'Clases de fotografía',
            hours: 4
        },
    ];

    const kitchen = [
        {
            title: 'Aprende a hacer postres',
            hours: 5
        },
        {
            title: 'Cocina Ecuatoriana',
            hours: 6
        },
        {
            title: 'Platos creativos',
            hours: 7
        },
        {
            title: 'Aprende cocina vegetariana',
            hours: 2
        },
        {
            title: 'Platos deconstruidos',
            hours: 7
        }
    ]

    const mySliders = [
        {
            items: () => 
                myFeatureds.map((featured, i) => 
                    <Services 
                        key={i}
                        width={itemsWidth}
                        title={featured.title}
                        hours={featured.hours}
                        click={() => navigation.navigate(routeName.serviceOrNeed, {
                            isNeed: false,
                            textButton: 'SOLICITAR SERVICIO'
                        })}
                    />   
                ),
            leftText: 'Destacados',
            rightText: 'Ver más',
            itemName: Services.name
        },
        {
            items: () => 
                myNeeds.map((need, i) => 
                    <Need 
                        key={i}
                        width={itemsWidth}
                        title={need.title}
                        hours={need.hours}
                        click={() => navigation.navigate(routeName.serviceOrNeed, {
                            isNeed: true,
                            textButton: 'CUBRIR NECESIDAD'
                        })}
                    />   
                ),
            leftText: 'Necesidades',
            rightText: 'Ver más',
            itemName: Need.name
        },
        {
            items: () => 
                art.map((a, i) => 
                    <Services 
                        key={i}
                        width={itemsWidth}
                        title={a.title}
                        hours={a.hours}
                        click={() => navigation.navigate(routeName.serviceOrNeed, {
                            isNeed: false,
                            textButton: 'SOLICITAR SERVICIO'
                        })}
                    />   
                ),
            leftText: 'Arte',
            rightText: 'Ver más',
            itemName: Need.name
        },
        {
            items: () => 
                kitchen.map((k, i) => 
                    <Services 
                        key={i}
                        width={itemsWidth}
                        title={k.title}
                        hours={k.hours}
                        click={() => navigation.navigate(routeName.serviceOrNeed, {
                            isNeed: false,
                            textButton: 'SOLICITAR SERVICIO'
                        })}
                    />   
                ),
            leftText: 'Cocina',
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