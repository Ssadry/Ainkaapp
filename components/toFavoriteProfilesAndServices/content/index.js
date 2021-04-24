import React from 'react';
import {Container} from './styled';
import Profile from './elements/profile';
import Service from './elements/service';
import {ScrollView} from 'react-native';

export default ({currentState}) => {
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

    const services = [
        <Service/>,
        <Service/>,
        <Service/>,
        <Service/>,
        <Service/>,
        <Service/>,
        <Service/>,
        <Service/>,
        <Service/>
    ]
    
    return (
        <ScrollView>
            <Container currentState={currentState} pos={0}>
                {profiles.map(profile => profile)}
            </Container>
            <Container currentState={currentState} pos={1}>
                {services.map(service => service)}
            </Container>
        </ScrollView>
    )
}