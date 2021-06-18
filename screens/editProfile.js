import React from 'react';
import styled from 'styled-components/native';
import Content from '../components/toEditProfile/content';
import Header from '../components/toEditProfile/header'

const EditProfile = ({navigation}) => {
    return (
        <Container>
            <Header
                navigation={navigation}
            />
            <Content/>
        </Container>
    );
};

export default EditProfile;

const Container = styled.View`
    flex: 1;
`;