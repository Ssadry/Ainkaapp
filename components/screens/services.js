import React from 'react';
import styled from 'styled-components/native';
import TopImage from '../toServices/topImage/index';
import Service from '../toServices/service/index';
import User from '../toServices/user/index';
import Petition from '../toServices/petition/index';
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