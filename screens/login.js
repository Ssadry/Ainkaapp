import React from 'react';
import styled from 'styled-components/native';
import Logo from '../components/toLogin/logo';
import Form from '../components/toLogin/form';
import Buttons from '../components/toLogin/buttons';

export default ({navigation}) => {
    return (
        <Container>
            <Logo/>
            <Form/>
            <Buttons
                navigation={navigation}
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;