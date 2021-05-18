import React from 'react';
import HeaderToSearch from '../components/headerToSearch';
import styled from 'styled-components/native';
import Default from '../components/toHome/containers/default';
import Searching from '../components/toHome/containers/searching';

export default ({navigation}) => {
    const [searchText, setSearchText] = React.useState('andry');

    return (
        <Container>
            <HeaderToSearch 
                setSearchText={setSearchText} 
                click={_ => navigation.navigate('Profile')}
            />
            <Default 
                searchText={searchText}
                navigation={navigation}
            />
            {/* El componente 'Searching' solo se visualiza cuando se escribe algo en el buscador. */}
            <Searching 
                searchText={searchText} 
                click={_ => navigation.navigate('WatchProfile')}
            />
        </Container>
    )
};

export const Container = styled.View`
    flex: 1;
`;