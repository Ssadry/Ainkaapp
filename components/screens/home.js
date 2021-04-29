import React, {useState} from 'react';
import HeaderToSearch from '../../components/headerToSearch/index';
import Default from '../toHome/containers/default';
import Searching from '../toHome/containers/searching';
import styled from 'styled-components/native';

export default () => {
    const [searchText, setSearchText] = useState('');

    return (
        <Container>
            <HeaderToSearch setSearchText={setSearchText}/>
            <Default searchText={searchText}/>
            <Searching searchText={searchText}/>
        </Container>
    )
};

export const Container = styled.View`
    flex: 1;
`;