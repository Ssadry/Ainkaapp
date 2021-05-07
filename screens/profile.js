import {Dimensions} from 'react-native';
import React from 'react';
import Header from '../components/toProfile/header';
import Services from '../components/toProfile/services';
import styled from 'styled-components/native';

const WINDOW = 'window';
const {width} = Dimensions.get(WINDOW);

export default ({navigation}) => {
    return (
        <Container>
            <Header width={width}/>
            <Services 
                width={width}
                click={() => navigation.navigate('Services')}
            />
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`;