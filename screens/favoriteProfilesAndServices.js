import React, {useState} from 'react';
import styled from 'styled-components/native';
import SwitchView from '../components/switchView/buttons';
import Description from '../components/toFavoriteProfilesAndServices/description';
import Content from '../components/toFavoriteProfilesAndServices/content';
import {View} from 'react-native';

export default () => {
    const [currentState, setCurrentState] = useState(0);
    const description = ['Servicios que te gustan', 'Perfiles que te interesan'];

    return (
        <Container>
            <View>
                <SwitchView 
                    currentState={currentState} 
                    setCurrentState={setCurrentState}
                    leftText='Servicios'
                    rightText='Perfiles'
                />
                <Description>
                    {description[currentState]}
                </Description>
            </View>
            <Content currentState={currentState}/>
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`;