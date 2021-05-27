import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {AppContext} from '../application/provider';
import {Dimensions} from 'react-native';
import Header from '../components/toPostAd/header';
import Info from '../components/toPostAd/info';
import Button from '../components/toPostAd/button';


export default () => {
    // const [popUpIsVisible] = useContext(AppContext);

    return (
        <Container>
            <Header/>
            <Info/>
            <Button/>
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
    background-color: white;
`;