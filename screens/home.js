import React, {useState} from 'react';
import HeaderToSearch from '../components/headerToSearch';
import Default from '../components/toHome/containers/default';
import Searching from '../components/toHome/containers/searching';
import styled from 'styled-components/native';

export default ({navigation}) => {
    const [searchText, setSearchText] = useState('');

    return (
        <Container>
            <HeaderToSearch setSearchText={setSearchText} click={() => navigation.navigate('Profile')}/>
            <Default 
                searchText={searchText}
                navigation={navigation}
            />
            <Searching 
                searchText={searchText} 
                click={() => navigation.navigate('WatchProfile')}
            />
        </Container>
    )
};

export const Container = styled.View`
    flex: 1;
`;