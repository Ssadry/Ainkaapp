import React from 'react';
import styled from 'styled-components/native';
import TopPhoto from '../components/toEditProfile/topPhoto';
import Content from '../components/toEditProfile/content';
import {ScrollView} from 'react-native';
import BackgroundDropdown from '../components/dropdown/background';

export default ({navigation}) => {
    const [settingsAreActivated, setSettingsAreActived] = React.useState(true);
    return (
        <Container>
            <TopPhoto
                navigation={navigation}
                changeSettingsVisibility={() => setSettingsAreActived(!settingsAreActivated)}
                settingsAreActivated={settingsAreActivated}
            />
            <Content/>
            {/* <BackgroundDropdown
                click={() => setSettingsAreActived(!settingsAreActivated)}
                isActivated={settingsAreActivated}
            /> */}
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`;