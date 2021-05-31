import React from 'react';
import Welcome from '../components/toSignup/welcome';
import Form from '../components/toSignup/form';
import styled from 'styled-components/native';

export default ({navigation}) => {

    return (
        <Container>
            <Welcome/>
            <Form navigation={navigation}/>
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
    padding-left: 20px;
    padding-right: 20px;
`;