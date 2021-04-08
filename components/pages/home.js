import React from 'react';
import Header from '../toHome/header/index';
import styled from 'styled-components';

export default () => {
    return (
        <Container>
            <Header/>
        </Container>
    )
};

const Container = styled.View`
    flex: 1;
    background-color: blue;
`;