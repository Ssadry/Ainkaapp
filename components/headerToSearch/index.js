import React from 'react';
import { Container, Profile, Hours, SearchBarContainer, ProfileContainer } from './styled';
import SearchBar from './searchBar/index';
import {Dimensions} from 'react-native';

const WIDTH_PERCENTAJE = 80;

export default ({ searchText, setSearchText }) => {
    const {width} = Dimensions.get('window');
    const searchBarWidth = width * (WIDTH_PERCENTAJE / 100);

    return (
        <Container width={width}>
            <SearchBarContainer>
                <SearchBar 
                    width={searchBarWidth}
                    setText={setSearchText}
                    searchText={searchText}
                />
            </SearchBarContainer>
            <ProfileContainer>
                <Profile>
                    <Hours>10 H</Hours>
                </Profile>
            </ProfileContainer>
        </Container>
    )
}