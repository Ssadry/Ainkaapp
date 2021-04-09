import React from 'react';
import {Header, Profile, Hours} from './styled';
import SearchBar from '../searchBar/index';

const WIDTH_PERCENTAJE = 85;

export default ({screenSize}) => {
    const searchBarWidth = screenSize.width * (WIDTH_PERCENTAJE / 100);

    return (
        <Header screenSize={screenSize}>
            <SearchBar width={searchBarWidth}/>
            <Profile>
                <Hours>10 H</Hours>
            </Profile>
        </Header>
    )
}