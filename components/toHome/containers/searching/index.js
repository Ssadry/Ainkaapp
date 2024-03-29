import React, {useState, lazy, Suspense, useContext} from 'react';
import {Container} from './styled';
import SwitchButtons from '../../../switchView/buttons';
import {Dimensions, Text} from 'react-native';
import Content from './content';
import {ArtIcon, KitchenIcon, SportIcon, CraftIcon, MusicIcon, LeisureIcon, TechnologyIcon, TransportIcon, IdiomIcon, OtherIcon} from '../../../../assets/svg/icon';
import Logo from '../../../../assets/images/logo.png';
import { AppContext } from '../../../../application/provider';
const LazyCategory = lazy(_ => import('../../../slider/item/category'));
const LazyProfile = lazy(_ => import('../../../slider/item/profile'));
const LazyNeed = lazy(_ => import ('../../../slider/item/need'));

const types = {
    CATEGORY : {
        NAME : 'category',
        AMOUNT : 23,
        COLUMNS : 3
    },
    NEED : {
        NAME : 'need',
        AMOUNT : 9,
        COLUMNS : 2
    },
    PROFILE : {
        NAME : 'profile',
        AMOUNT : 17,
        COLUMNS: 2
    },
};

const SIZE_ICON = 45;

const categoriesValues = [
    {
        name: 'Arte',
        icon: <ArtIcon
            size={SIZE_ICON}
        />
    },
    {
        name: 'Cocina',
        icon: <KitchenIcon
            size={SIZE_ICON}
        />
    },
    {
        name: 'Deportes',
        icon: <SportIcon
            size={SIZE_ICON}
        />
    },
    {
        name: 'Manualiades',
        icon: <CraftIcon
            size={SIZE_ICON}
        />
    },
    {
        name: 'Música',
        icon: <MusicIcon
            size={SIZE_ICON}
        />
    },
    {
        name: 'Ocio',
        icon: <LeisureIcon
            size={SIZE_ICON}
        />
    },
    {
        name: 'Tecnología',
        icon: <TechnologyIcon
            size={SIZE_ICON}
        />
    },
    {
        name: 'Transporte',
        icon: <TransportIcon
            size={SIZE_ICON}
        />
    },
    {
        name: 'Idiomas',
        icon: <IdiomIcon
            size={SIZE_ICON}
        />
    },
    {
        name: 'Otros',
        icon: <OtherIcon
            size={SIZE_ICON}
        />
    },
];

const buttonsName = ['Categorías', 'Necesidades', 'Perfiles'];
const width = Math.round(Dimensions.get('screen').width);

export default ({isSearchingOnHome, navigation}) => {
    const [routeName] = useContext(AppContext);
    const [currentState, setCurrentState] = useState(0);

    const createArray = (type, amount) => {
        const arr = [];
        let elementWidth;
        
        switch(type) {
            case types.CATEGORY.NAME:
                elementWidth = width / types.CATEGORY.COLUMNS * 0.9;

                categoriesValues.forEach((category, i) => {
                    arr.push(
                        <LazyCategory 
                            width={elementWidth} 
                            key={i}
                            click={() => navigation.navigate(routeName.watchMoreItems, {title: category.name})}
                            image={category.icon}
                            title={category.name}
                        />
                    );
                });
                break;
            case types.NEED.NAME:
                elementWidth = width / types.NEED.COLUMNS * 0.9;
                for (let i = 0; i < amount; i++) 
                    arr.push( 
                        <LazyNeed 
                            width={elementWidth} 
                            key={i} 
                            title={'Título de una necesidad'}
                            click={() => navigation.navigate(routeName.serviceOrNeed, {isNeed: true})}
                        />
                    );
                break;
            case types.PROFILE.NAME:
                elementWidth = width / types.PROFILE.COLUMNS * 0.9;
                for (let i = 0; i < amount; i++) {
                    arr.push(
                        <LazyProfile 
                            width={elementWidth} 
                            key={i} 
                            click={() => navigation.navigate(routeName.anotherProfile, {isOwnProfile: false})}
                            image={Logo}
                        />
                    );
                }
                break;
        }
        return arr;
    }

    const categories = createArray(types.CATEGORY.NAME, types.CATEGORY.AMOUNT);
    const needs = createArray(types.NEED.NAME, types.NEED.AMOUNT);
    const profiles = createArray(types.PROFILE.NAME, types.PROFILE.AMOUNT);

    return (
        <Container 
            textInputIsOnFocus={isSearchingOnHome}
        >
            <SwitchButtons 
                currentState={currentState}
                setCurrentState={setCurrentState}
                allTexts={buttonsName}
            />
            <Suspense 
                fallback={<Text>Cargando categorías...</Text>}
            >
                <Content 
                    width={width}
                    currentState={currentState}
                    contentState={0}
                >
                    {categories}
                </Content>
            </Suspense>
            <Suspense 
                fallback={<Text>Cargando necesidades...</Text>}
            >
                <Content 
                    width={width}
                    currentState={currentState}
                    contentState={1}
                >
                    {needs}
                </Content>
            </Suspense>
            <Suspense 
                fallback={<Text>Cargando perfiles...</Text>}
            >
                <Content 
                    width={width}
                    currentState={currentState}
                    contentState={2}
                >
                    {profiles}
                </Content>
            </Suspense>
        </Container>
    )
}
