import React from 'react';
import {Container} from './styled';
import Profile from './elements/profile';
import {ScrollView} from 'react-native';

export default () => {
    const profiles = [
        <Profile/>,
        <Profile/>,
        <Profile/>,
        <Profile/>,
        <Profile/>,
        <Profile/>,
        <Profile/>,
        <Profile/>,
        <Profile/>
    ]
    
    return (
        <ScrollView>
            <Container>
                {profiles.map(profile => profile)}
            </Container>
        </ScrollView>
    )
}