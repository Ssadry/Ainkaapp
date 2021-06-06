import React from 'react';
import TopSettings from '../components/toProfile/topSettings';
import Content from '../components/toProfile/content';
import TopPhoto from '../components/toProfile/topPhoto';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Background from '../components/dropdown/background';

export default ({navigation, route}) => {
    const [settingsAreActivated, setSettingsAreActivated] = React.useState(false);
    const {isOwnProfile} = route?.params ?? true;
    return (
        <Container>
            <TopSettings
                changeSettingsVisibility={() => setSettingsAreActivated(!settingsAreActivated)}
                settingsAreActivated={settingsAreActivated}
            />
            <ScrollView>
                <TopPhoto/>
                <Content
                    isOwnProfile={isOwnProfile}
                />
            </ScrollView>
            <Background
                click={() => setSettingsAreActivated(!settingsAreActivated)}
                isActivated={settingsAreActivated}
            />
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`;