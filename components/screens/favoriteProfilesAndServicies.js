import React, {useState} from 'react';
import styled from 'styled-components/native';
import SwitchView from '../switchView/buttons';
import Description from '../toFavoriteProfilesAndServices/description';
import Content from '../toFavoriteProfilesAndServices/content';

export default () => {
    const [currentState, setCurrentState] = useState(0);
    const description = ['Servicios que te gustan', 'Perfiles que te interesan'];

    return (
        <Container>
            <ContentSwitch>
                <SwitchView 
                    currentState={currentState} 
                    setCurrentState={setCurrentState}
                    leftText='Servicios'
                    rightText='Perfiles'
                />
                <Description>
                    {description[currentState]}
                </Description>
            </ContentSwitch>
            <Content/>
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
    background-color: cyan;
`;

export const ContentSwitch = styled.View`
    margin-top: 35px;
`;