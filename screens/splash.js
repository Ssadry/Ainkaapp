import React from 'react';
import Icon from '../assets/icon.png';
import styled from 'styled-components/native';

export default Splash = ({navigation}) => {
    setTimeout(() => {
        // alert('xd')
    }, 5000);
    return (
        <Container>
            <Logo
                source={Icon}
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.Image`
    width: 200px;
    height: 200px;
`;