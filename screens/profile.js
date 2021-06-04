import React from 'react';
import TopSettings from '../components/toProfile/topSettings';
import Content from '../components/toProfile/content';
import TopPhoto from '../components/toProfile/topPhoto';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';

export default ({navigation, route}) => {
    const isOwnProfile = route?.params?.isOwnProfile ?? true;
    return (
        <Container>
            <TopSettings/>
            <ScrollView>
                <TopPhoto/>
                <Content
                    isOwnProfile={isOwnProfile}
                />
            </ScrollView>
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`;