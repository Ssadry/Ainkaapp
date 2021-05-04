import React from 'react';
import styled from 'styled-components/native';
import Header from '../toRequest/header';
import Content from '../toRequest/content';
import Buttons from '../toRequest/buttons';
import {Dimensions} from 'react-native';

export default ({navigation}) => {
    const {width} = Dimensions.get('window');

    return (
        <Container>
            <Header navigation={navigation}/>
            <Buttons 
                width={width}
                navigation={navigation}
            />
            <Content/>
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`;