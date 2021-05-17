import React from 'react';
import { Container, Profile, Hours, SearchBarContainer, ProfileContainer } from './styled';
import SearchBar from './searchBar/index';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const searchBarWidth = width * 0.8;

export default ({ searchText, setSearchText, click }) => (
    <Container width={width}>
        <SearchBarContainer>
            <SearchBar 
                width={searchBarWidth}
                setText={setSearchText}
                searchText={searchText}
            />
        </SearchBarContainer>
        <ProfileContainer onPress={_ => click()}>
            <Profile>
                <Hours>10 H</Hours>
            </Profile>
        </ProfileContainer>
    </Container>
)