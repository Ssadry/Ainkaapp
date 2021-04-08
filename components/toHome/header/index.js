import {Dimensions, Text} from 'react-native';
import React from 'react';
import {Header, Profile, Hours} from './styled';
import SearchBar from '../searchBar/index';

const WINDOW = 'window';
const PERCENTAJE = 85;

export default () => {
    const {width} = Dimensions.get(WINDOW);
    const searchBarWidth = width * (PERCENTAJE / 100);

    return (
        <Header width={width}>
            <SearchBar width={searchBarWidth}/>
            <Profile>
                <Hours>10 H</Hours>
            </Profile>
        </Header>
    )
}