import {Dimensions, Text} from 'react-native';
import React, {lazy, Suspense} from 'react';
import Header from '../components/toProfile/header';
import styled from 'styled-components/native';

const LazyServices = lazy(() => import('../components/toProfile/services'));
const WINDOW = 'window';
const {width} = Dimensions.get(WINDOW);

export default ({navigation}) => {
    return (
        <Container>
            <Header width={width}/>
            <Suspense fallback={<Text>Cargando servicios...</Text>}>
                <LazyServices 
                    width={width}
                    click={() => navigation.navigate('Services')}
                />
            </Suspense>
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`;