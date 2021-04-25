import React from 'react';
import Welcome from '../toSignup/welcome/index';
import Form from '../toSignup/form/index';
import styled from 'styled-components/native';

export default ({navigation}) => {
    return (
        <Container>
            <Welcome/>
            <Form/>
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
`;