import React from 'react';
import {View, Dimensions} from 'react-native';
import Header from '../toChat/header/index';
import Messages from '../toChat/messages/index';
import Send from '../toChat/send/index';

export default () => {
    return (
        <View style={{flex: 1}}>
            <Header width={Dimensions.get('window').width}/>
            <Messages/>
            <Send/>
        </View>
    )
}