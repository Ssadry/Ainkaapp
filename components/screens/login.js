import React from 'react';
import LogoContainer from '../../components/toLogin/containers/logo/index';
import FormContainer from '../../components/toLogin/containers/form/index';
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