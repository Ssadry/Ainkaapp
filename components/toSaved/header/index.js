import React from 'react';
import {Container, Title, TitleAndIcon, Plus} from './styled';
import GoToBackButton from '../../goToBackButton';
import {Dimensions} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const {width} = Dimensions.get('screen');

export default ({navigation, title}) => {
    return (
        <Container width={width}>
            <GoToBackButton navigation={navigation}/>
            <TitleAndIcon>
                <Title>
                    {title}
                </Title>
                <Plus
                    OnPress={() => alert('Hola :D')}
                >
                    <FontAwesomeIcon icon={faPlus}/>
                </Plus>
            </TitleAndIcon>
        </Container>
    )
}