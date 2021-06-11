import React, {useState} from 'react';
import TopSettings from '../components/toProfile/topSettings';
import Content from '../components/toProfile/content';
import TopPhoto from '../components/toProfile/topPhoto';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import Background from '../components/dropdown/background';

const Profile = ({navigation, route}) => {
    const [settingsAreActivated, setSettingsAreActivated] = useState(false);
    const isOwnProfile = route?.params?.isOwnProfile || true;
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

export default Profile;

const Container = styled.View`
    flex: 1;
`;