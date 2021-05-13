import React from 'react';
import styled from 'styled-components/native';
import Icon from '../assets/services/Aprende_a_usar_Facebook.jpg'

export default () => {
    return (
        <Container source={Icon} blurRadius={10}>
            <Cube/>
        </Container>
    )
}

export const Container = styled.ImageBackground`
    flex: 1;
`;

export const Cube = styled.View`
    background-color: red;
    width: 100px;
    height: 100px;
`;