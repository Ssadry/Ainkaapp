import React from 'react';
import { Container } from './styled';
import SearchBar from './searchBar/index';

export default ({ searchText, setSearchText, width, click }) => {
    const searchBarContainerWidth = width * 0.8;

    return (
        <Container width={width}>
            <SearchBar 
                width={searchBarContainerWidth}
                setText={setSearchText}
                searchText={searchText}
                click={click}
            />
        </Container>
    )
}