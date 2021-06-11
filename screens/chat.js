import React from 'react';
import { View, Dimensions } from 'react-native';
import Header from '../components/toChat/header/index';
import Messages from '../components/toChat/messages/index';
import Send from '../components/toChat/send/index';

const Chat = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <Header 
                width={Dimensions.get('window').width}
                navigation={navigation}
            />
            <Messages />
            <Send />
        </View>
    );
};

export default Chat;