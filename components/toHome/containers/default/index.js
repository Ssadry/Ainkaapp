import React, {lazy, Suspense, useState} from 'react';
import {Container, ScrollView} from './styled';
import Banner from './banner';
import Slider from '../../../slider';
import {Text} from 'react-native';
import item from '../../../toInbox/item';
import {
    ArtIcon, 
    KitchenIcon, 
    SportIcon, 
    CraftIcon, 
    MusicIcon, 
    LeisureIcon, 
    OtherIcon, 
    TechnologyIcon, 
    TransportIcon,
    IdiomIcon
} from '../../../../assets/svg/icon';
import defaultColors from '../../../../assets/colors/defaultColors.json';

const LazyContent = lazy(() => import('./content'));
const LazyServiceItem = lazy(() => import('../../../slider/item/service'));

const DARK_BLUE = defaultColors.AzulOscuro;
const SIZE_ICON = 30;

const categories = [
    {
        name: 'Arte',
        icon: <ArtIcon
            color={DARK_BLUE}
            size={SIZE_ICON}
        />
    },
    {
        name: 'Cocina',
        icon: <KitchenIcon
            color={DARK_BLUE}
            size={SIZE_ICON}
        />
    },
    {
        name: 'Deportes',
        icon: <SportIcon
            color={DARK_BLUE}
            size={SIZE_ICON}
        />
    },
    {
        name: 'Manualiades',
        icon: <CraftIcon
            color={DARK_BLUE}
            size={SIZE_ICON}
        />
    },
    {
        name: 'Música',
        icon: <MusicIcon
            color={DARK_BLUE}
            size={SIZE_ICON}
        />
    },
    {
        name: 'Ocio',
        icon: <LeisureIcon
            color={DARK_BLUE}
            size={SIZE_ICON}
        />
    },
    {
        name: 'Tecnología',
        icon: <TechnologyIcon
            color={DARK_BLUE}
            size={SIZE_ICON}
        />
    },
    {
        name: 'Transporte',
        icon: <TransportIcon
            color={DARK_BLUE}
            size={SIZE_ICON}
        />
    },
    {
        name: 'Idiomas',
        icon: <IdiomIcon
            color={DARK_BLUE}
            size={SIZE_ICON}
        />
    },
    {
        name: 'Otros',
        icon: <OtherIcon
            color={DARK_BLUE}
            size={SIZE_ICON}
        />
    },
]

export default ({
    isSearchingOnHome, 
    navigation
}) => {
    const [sliderItemWidth, setSliderItemWidth] = useState(0);

    const items = [];
    categories.forEach((category, i) => {
        items.push(
            <Suspense 
                key={i} 
                fallback={<Text>Cargando...</Text>}
            >
                <LazyServiceItem 
                    width={sliderItemWidth}
                    title={category.name}
                    icon={category.icon}
                />
            </Suspense>
        );
    });
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