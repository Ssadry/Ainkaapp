import React, {useState, lazy, Suspense} from 'react';
import HeaderToSearch from '../components/headerToSearch';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const LazyDefault = lazy(() => import('../components/toHome/containers/default'));
const LazySearching = lazy(() => import('../components/toHome/containers/searching'));

export default ({navigation}) => {
    const [searchText, setSearchText] = useState('');

    return (
        <Container>
            <HeaderToSearch 
                setSearchText={setSearchText} 
                click={() => navigation.navigate('Profile')}
            />
            <Suspense fallback={<Text>Cargando...</Text>}>
                <LazyDefault 
                    searchText={searchText}
                    navigation={navigation}
                />
            </Suspense>
            <Suspense fallback={<Text>Cargando...</Text>}>
                <LazySearching 
                    searchText={searchText} 
                    click={() => navigation.navigate('WatchProfile')}
                />
            </Suspense>
        </Container>
    )
};

export const Container = styled.View`
    flex: 1;
`;