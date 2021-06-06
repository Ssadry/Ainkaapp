import React from 'react';
import styled from 'styled-components/native';
import Content from '../components/toEditProfile/content';
import Header from '../components/toEditProfile/header'

export default EditProfile = () => {
    return (
        <Container>
            <Header/>
            <Content/>
        </Container>
    )
} 

const Container = styled.View`
    flex: 1;
`;