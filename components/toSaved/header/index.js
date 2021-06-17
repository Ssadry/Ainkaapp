import React from 'react';
import {Container, Title, TitleAndIcon} from './styled';
import GoToBackButton from '../../goToBackButton';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export default ({navigation, title}) => {
    return (
        <Container width={width}>
            <GoToBackButton navigation={navigation}/>
            <TitleAndIcon>
                <Title>
                    {title}
                </Title>
            </TitleAndIcon>
        </Container>
    )
}