import React from 'react';
import {Content} from './styled';
import Profile from './elements/profile';
import Service from './elements/service';
import {ScrollView, Dimensions} from 'react-native';

const contentWidth = Dimensions.get('window').width;
const elementWidth = contentWidth * 0.5;

const type = {
    PROFILE : 'profile',
    SERVICE : 'service'
}

const getArray = (component, len) => {
    const arr = [len];

    switch (component) {
        case type.PROFILE:
            for (let i = 0; i < len; i++) arr[i] = <Profile key={i} width={elementWidth}/>;
            break;
        case type.SERVICE:
            for (let i = 0; i < len; i++) arr[i] = <Service key={i} width={elementWidth}/>;
            break;
    }

    return arr;
}

export default ({currentState}) => {
    const profiles = getArray(type.PROFILE, 13);
    const services = getArray(type.SERVICE, 15);
    
    return (
        <ScrollView style={{flex: 1}}>
            <Content 
                currentState={currentState} 
                pos={1}
                width={contentWidth}
            >
                {services.map(service => service)}
            </Content>
            <Content 
                currentState={currentState} 
                pos={0}
                width={contentWidth}
            >
                {profiles.map(profile => profile)}
            </Content>
        </ScrollView>
    )
}