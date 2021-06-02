import React from 'react';
import {Container} from './styled';
import Chats from './chats';
import Requests from './requests';
import Contacts from './contacts';
import { ScrollView } from 'react-native';

export default Content = () => {
    return (
        <ScrollView>
            <Container>
                <Chats/>
                <Requests/>
                <Contacts/>
            </Container>
        </ScrollView>
    )
}