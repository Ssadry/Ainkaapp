import React from 'react';
import styled from 'styled-components/native';
import TopSettings from '../components/toServiceOrNeed/topSettings';
import Header from '../components/toServiceOrNeed/header';
import Content from '../components/toServiceOrNeed/content';

export default () => {
    return (
        <Container>
            <TopSettings/>
            <Header/>
            <Content/>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;