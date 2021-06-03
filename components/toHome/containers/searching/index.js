import React, {useState, lazy, Suspense} from 'react';
import {Container} from './styled';
import SwitchButtons from '../../../switchView/buttons';
import {ScrollView, Dimensions, Text, View} from 'react-native';
import Content from './content';

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
}

const buttonsName = ['Categorías', 'Necesidades', 'Perfiles'];
const width = Math.round(Dimensions.get('screen').width);

export default ({searchText, click}) => {
    const [currentState, setCurrentState] = useState(0);

    const createArray = (type, amount) => {
        const arr = [amount];
        let elementWidth;
        
        switch(type) {
            case types.CATEGORY.NAME:
                elementWidth = width / types.CATEGORY.COLUMNS * 0.9;
                for (let i = 0; i < amount; i++) arr[i] = <LazyCategory width={elementWidth} key={i}/>
                break;
            case types.NEED.NAME:
                elementWidth = width / types.NEED.COLUMNS * 0.9;
                for (let i = 0; i < amount; i++) arr[i] = <LazyNeed width={elementWidth} key={i} title={'Título de una necesidad'}/>
                break;
            case types.PROFILE.NAME:
                elementWidth = width / types.PROFILE.COLUMNS * 0.9;
                for (let i = 0; i < amount; i++) arr[i] = <LazyProfile width={elementWidth} key={i} click={click}/>
                break;
        }
        return arr;
    }

    const categories = createArray(types.CATEGORY.NAME, types.CATEGORY.AMOUNT);
    const needs = createArray(types.NEED.NAME, types.NEED.AMOUNT);
    const profiles = createArray(types.PROFILE.NAME, types.PROFILE.AMOUNT);

    return (
        <Container searchText={searchText}>
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
