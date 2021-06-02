import React from 'react';
import {Container, Title} from './styled';
import GoToBackButton from '../../../components/goToBackButton';

export default Header = ({navigation}) => {
    return (
        <Container>
            <GoToBackButton
                navigation={navigation}
            />
            <Title>
                Tu bandeja
            </Title>
        </Container>
    )
}