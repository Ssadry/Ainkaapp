import React, {useState, lazy, Suspense} from 'react';
import {Container, Content} from './styled';
import SwitchButtons from '../../../switchView/buttons';
import {ScrollView, Dimensions, Text} from 'react-native';

const LazyCategory = lazy(() => import('./elements/category'));
const LazyProfile = lazy(() => import('./elements/profile'));

const types = {
    CATEGORY : 'category',
    PROFILE : 'profile'
}

export default ({searchText, click}) => {
    const [currentState, setCurrentState] = useState(0);
    const {width} = Dimensions.get('window');
    const elementWidth = width * 0.5;

    const createArray = (type, amount) => {
        const arr = [amount];
        switch(type) {
            case types.CATEGORY:
                for (let i = 0; i < amount; i++) arr[i] = <LazyCategory width={elementWidth} key={i}/>
                break;
            case types.PROFILE:
                for (let i = 0; i < amount; i++) arr[i] = <LazyProfile width={elementWidth} key={i} click={click}/>
                break;
        }
        return arr;
    }

    const categories = createArray(types.CATEGORY, 13);
    const profiles = createArray(types.PROFILE, 7);

    return (
        <Container searchText={searchText}>
            <SwitchButtons 
                currentState={currentState}
                setCurrentState={setCurrentState}
                leftText={'Categorías'}
                rightText={'Perfiles'}
            />
            <ScrollView>
                <Suspense fallback={<Text>Cargando categorías...</Text>}>
                    <Content 
                        currentState={currentState}
                        pos={0}
                    >
                        {categories.map(category => category)}
                    </Content>
                </Suspense>
                <Suspense fallback={<Text>Cargando perfiles...</Text>}>
                    <Content 
                        currentState={currentState}
                        pos={1}
                    >
                        {profiles.map(profile => profile)}
                    </Content>
                </Suspense>
            </ScrollView>
        </Container>
    )
}
