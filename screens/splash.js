import React from 'react';
import Icon from '../assets/icon.png';
import styled from 'styled-components/native';
import {AppContext} from '../application/provider';

const Splash = ({navigation}) => {
    const [routeName] = React.useContext(AppContext);

    setTimeout(() => {
        navigation.navigate('BottomNavigation');
    }, 2000);

    return (
        <Container>
            <Logo
                source={Icon}
            />
        </Container>
    )
}

export default Splash;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.Image`
    width: 200px;
    height: 200px;
`;