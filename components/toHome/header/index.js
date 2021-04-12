import React from 'react';
import {Header, Profile, Hours, SearchBarContainer, ProfileContainer} from './styled';
import SearchBar from './searchBar/index';

const WIDTH_PERCENTAJE = 80;

export default ({screenSize}) => {
    const searchBarWidth = screenSize.width * (WIDTH_PERCENTAJE / 100);

    return (
        <Header screenSize={screenSize}>
            <SearchBarContainer>
                <SearchBar width={searchBarWidth}/>
            </SearchBarContainer>
            <ProfileContainer>
                <Profile>
                    <Hours>10 H</Hours>
                </Profile>
            </ProfileContainer>
        </Header>
    )
}