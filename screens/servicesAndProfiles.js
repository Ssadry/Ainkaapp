import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import HeaderToSearch from '../headerToSearch/index';
import SwitchButton from '../switchView/buttons';
import Content from '../toServicesAndProfiles/content/index';

export default () => {
    const { width } = Dimensions.get('window');
    const [currentState, setCurrentState] = useState(0);
    const [searchText, setSearchText] = useState(true);

    return (
        <View style={{ flex: 1 }}>
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
        </View>
    );
}