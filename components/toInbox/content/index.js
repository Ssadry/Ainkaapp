import React from 'react';
import {Container} from './styled';
import Chats from './chats';
import Requests from './requests';
import Contacts from './contacts';
import { ScrollView } from 'react-native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const itemWidth = width * 0.8;

export default Content = ({currentState = 0}) => {
    return (
        <ScrollView>
            <Container>
                <Chats
                    currentState={currentState}
                    pos={0}
                    itemWidth={itemWidth}
                />
                <Requests
                    currentState={currentState}
                    pos={1}
                    itemWidth={itemWidth}
                />
                <Contacts
                    currentState={currentState}
                    pos={2}
                    itemWidth={itemWidth}
                />
            </Container>
        </ScrollView>
    )
}