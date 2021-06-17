import React, {useState, useContext} from 'react';
import HeaderToSearch from '../components/headerToSearch';
import styled from 'styled-components/native';
import Default from '../components/toHome/containers/default';
import Searching from '../components/toHome/containers/searching';
import {AppContext} from '../application/provider';
import defaultColors from '../assets/colors/defaultColors.json';

const Home = ({navigation}) => {
    const [routeName, isSearchingOnHome, setIsSearchingOnHome] = useContext(AppContext);
    const [searchText, setSearchText] = useState('');

    return (
        <Container>
            <HeaderToSearch
                setSearchText={setSearchText} 
                isSearchingOnHome={isSearchingOnHome}
                setIsSearchingOnHome={setIsSearchingOnHome}
                click={() => navigation.navigate(routeName.profile)}
                navigation={navigation}
            />
            <Default 
                isSearchingOnHome={isSearchingOnHome}
                navigation={navigation}
            />
            {/* El componente 'Searching' solo se visualiza cuando se selecciona el buscador. */}
            <Searching
                isSearchingOnHome={isSearchingOnHome} 
                goToWatchMoreItems={() => navigation.navigate(routeName.watchMoreItems)}
                goToProfile={() => navigation.navigate(routeName.profile)}
            />
        </Container>
    );
};

export default Home;

const Container = styled.View`
    flex: 1;
    background-color: ${defaultColors.GrisPerla};
`;
