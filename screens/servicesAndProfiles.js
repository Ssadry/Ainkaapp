import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import HeaderToSearch from '../headerToSearch/index';
import SwitchButton from '../switchView/buttons';
import Content from '../toServicesAndProfiles/content/index';
import styled from 'styled-components/native';

export default () => {
    const { width } = Dimensions.get('window');
    const [currentState, setCurrentState] = useState(0);
    const [searchText, setSearchText] = useState(true);

    return (
        <Container>
            <HeaderToSearch 
                searchText={searchText} 
                setSearchText={setSearchText}
            />
            <SwitchButton
                currentState={currentState}
                setCurrentState={setCurrentState}
                leftText={'Categorías'}
                rightText={'Perfiles'}
            />
            <Content
                width={width}
                currentState={currentState}
            />
        </Container>
    );
}

export const Container = styled.View`
    flex: 1;
`;