import React from 'react';
import {Container} from './styled';
import Profile from './elements/profile';
import Service from './elements/service';
import {ScrollView} from 'react-native';

export default ({currentState}) => {
    const profiles = [
        <Profile key={0}/>,
        <Profile key={1}/>,
        <Profile key={2}/>,
        <Profile key={3}/>,
        <Profile key={4}/>,
        <Profile key={5}/>,
        <Profile key={6}/>,
        <Profile key={7}/>,
        <Profile key={8}/>
    ]

    const services = [
        <Service key={0}/>,
        <Service key={1}/>,
        <Service key={2}/>,
        <Service key={3}/>,
        <Service key={4}/>,
        <Service key={5}/>,
        <Service key={6}/>,
        <Service key={7}/>,
        <Service key={8}/>
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