import React from 'react';
import LogoContainer from '../components/toLogin/containers/logo';
import FormContainer from '../components/toLogin/containers/form';
import styled from 'styled-components/native';

export default ({ navigation }) => {
    return (
        <Container>
            <LogoContainer />
            <FormContainer navigation={navigation} />
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`;