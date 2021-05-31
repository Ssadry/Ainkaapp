import React from 'react';
import styled from 'styled-components/native';
import TopImage from '../components/toServices/topImage';
import Service from '../components/toServices/service';
import User from '../components/toServices/user';
import Petition from '../components/toServices/petition';
import {Dimensions} from 'react-native';

export default ({navigation}) => {
    const {width} = Dimensions.get('window');

    return (
        <Container>
            <TopImage 
                width={width} 
                navigation={navigation}
            />
            <Service />
            <User />
            <Petition />
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`;