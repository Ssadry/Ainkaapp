import React from 'react';
import styled from 'styled-components/native';
import Header from '../toPublicarAnuncio/header';
import Photo from '../toPublicarAnuncio/photo';
import Info from '../toPublicarAnuncio/info';

export default () => {
    return (
        <Container>
            <Header/>
            <Photo/>
            <Info/>
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
    background-color: cyan;
`;