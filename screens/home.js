import React, {useState, useContext} from 'react';
import HeaderToSearch from '../components/headerToSearch';
import styled from 'styled-components/native';
import Default from '../components/toHome/containers/default';
import Searching from '../components/toHome/containers/searching';
import {AppContext} from '../application/provider';

const Home = ({navigation}) => {
    const [routeName] = useContext(AppContext);

    const [searchText, setSearchText] = useState('');
    const [textInputIsOnFocus, setTextInputIsOnFocus] = useState(false);

    return (
        <Container>
            <HeaderToSearch
                setSearchText={setSearchText} 
                textInputIsOnFocus={textInputIsOnFocus}
                setTextInputIsOnFocus={setTextInputIsOnFocus}
                click={() => navigation.navigate(routeName.profile)}
                navigation={navigation}
            />
            <Default 
                textInputIsOnFocus={textInputIsOnFocus}
                navigation={navigation}
            />
            {/* El componente 'Searching' solo se visualiza cuando se selecciona el buscador. */}
            <Searching
                textInputIsOnFocus={textInputIsOnFocus} 
                goToWatchMoreItems={() => navigation.navigate(routeName.watchMoreItems)}
                goToProfile={() => navigation.navigate(routeName.profile)}
            />
        </Container>
    )
};

export default Home;

const Container = styled.View`
    flex: 1;
`;
