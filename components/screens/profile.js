import {Dimensions} from 'react-native';
import React from 'react';
import Header from '../toProfile/header/index';
import Services from '../toProfile/services/index';
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
    justify-content: center;
    align-items: center;
    width: ${width + 'px'};
`;