import React, {useState, lazy, Suspense} from 'react';
import {Container} from './styled';
import SwitchButtons from '../../../switchView/buttons';
import {ScrollView, Dimensions, Text} from 'react-native';
import Content from './content';

const LazyCategory = lazy(_ => import('./elements/category'));
const LazyProfile = lazy(_ => import('./elements/profile'));
const LazyNeed = lazy(_ => import ('./elements/need'));

const types = {
    CATEGORY : {
        NAME : 'Categorías',
        AMOUNT : 13
    },
    NEED : {
        NAME : 'Necesidades',
        AMOUNT : 9
    },
    PROFILE : {
        NAME : 'Perfiles',
        AMOUNT : 17
    },
}

const buttonsName = ['Categorías', 'Necesidades', 'Perfiles'];
const {width} = Dimensions.get('window');

export default ({searchText, click}) => {
    const [currentState, setCurrentState] = useState(0);

    const createArray = (type, amount) => {
        const arr = [amount];
        
        switch(type) {
            case types.CATEGORY.NAME:
                for (let i = 0; i < amount; i++) arr[i] = <LazyCategory key={i}/>
                break;
            case types.NEED.NAME:
                for (let i = 0; i < amount; i++) arr[i] = <LazyNeed key={i}/>
                break;
            case types.PROFILE.NAME:
                for (let i = 0; i < amount; i++) arr[i] = <LazyProfile key={i} click={click}/>
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
            <ScrollView>
                <Suspense fallback={<Text>Cargando categorías...</Text>}>
                    <Content 
                        width={width}
                        currentState={currentState}
                        contentState={0}
                        columns={3}
                    >
                        {categories}
                    </Content>
                </Suspense>
                <Suspense fallback={<Text>Cargando necesidades...</Text>}>
                    <Content 
                        width={width}
                        currentState={currentState}
                        contentState={1}
                        columns={2}
                    >
                        {needs}
                    </Content>
                </Suspense>
                <Suspense fallback={<Text>Cargando perfiles...</Text>}>
                    <Content 
                        width={width}
                        currentState={currentState}
                        contentState={2}
                        columns={3}
                    >
                        {profiles}
                    </Content>
                </Suspense>
            </ScrollView>
        </Container>
    )
}
