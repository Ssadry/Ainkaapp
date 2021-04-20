import React from 'react';
import { Container, Profile, Hours, SearchBarContainer, ProfileContainer } from './styled';
import SearchBar from './searchBar/index';

const WIDTH_PERCENTAJE = 80;

export default ({ width }) => {
    const searchBarWidth = width * (WIDTH_PERCENTAJE / 100);

    return (
        <Container width={width}>
            <SearchBarContainer>
                <SearchBar width={searchBarWidth} />
            </SearchBarContainer>
            <ProfileContainer>
                <Profile>
                    <Hours>10 H</Hours>
                </Profile>
            </ProfileContainer>
        </Container>
    )
}