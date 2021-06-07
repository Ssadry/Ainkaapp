import React from 'react';
import { Container } from './styled';
import SearchBar from './searchBar/index';

export default ({ searchText, textInputIsOnFocus, setTextInputIsOnFocus, setSearchText, width, click }) => {
    const searchBarContainerWidth = width * 0.75;

    return (
        <Container>
            <SearchBar 
                width={searchBarContainerWidth}
                textInputIsOnFocus={textInputIsOnFocus}
                setTextInputIsOnFocus={setTextInputIsOnFocus}
                setSearchText={setSearchText}
                searchText={searchText}
                click={click}
            />
        </Container>
    )
}