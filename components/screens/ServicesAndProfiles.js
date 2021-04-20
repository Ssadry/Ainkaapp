import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import Header from '../headerToSearch/index';
import SwitchButton from '../switchView/buttons';
import Content from '../toServicesAndProfiles/content/index';

export default () => {
    const { width } = Dimensions.get('window');
    const [currentState, setCurrentState] = useState(0);

    return (
        <View style={{ flex: 1 }}>
            <Header width={width} />
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