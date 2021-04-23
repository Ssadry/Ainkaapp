import React from 'react';
import {Container} from './styled';
import Profile from './elements/profile';
import {ScrollView} from 'react-native';

export default () => {
    return (
        <ScrollView>
            <Container>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
                <Profile/>
            </Container>
        </ScrollView>
    )
}