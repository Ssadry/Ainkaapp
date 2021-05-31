import React from 'react';
import {Container, Title} from './styled';
import GoToBackButton from '../../goToBackButton';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export default ({navigation, title}) => {
    return (
        <Container width={width}>
            <GoToBackButton navigation={navigation}/>
            <Title>
                {title}
            </Title>
        </Container>
    )
}