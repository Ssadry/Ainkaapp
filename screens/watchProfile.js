import {Dimensions} from 'react-native';
import React from 'react';
import Header from '../components/toProfile/header/index';
import Services from '../components/toProfile/services/index';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

export default ({navigation}) => {
    return (
        <Container>
            <Header width={width} navigation={navigation}/>
            <Services 
                width={width} 
                click={() => navigation.navigate('Services')}
            />
        </Container>
    )
}

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    width: ${width + 'px'};
`;