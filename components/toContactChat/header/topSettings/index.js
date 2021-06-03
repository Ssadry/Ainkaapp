import React from 'react';
import {Container, IconsContainer, Icon} from './styled';
import GoToBackButton from '../../../goToBackButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

export default Header = ({navigation}) => {
    return (
        <Container>
            <GoToBackButton
                navigation={navigation}
            />
            <IconsContainer
                onPress={() => alert('Todavía no sé qué debe hacer este botón.')}
            >
                <Icon>
                    <FontAwesomeIcon 
                        icon={faEllipsisV}
                        size={25}
                    />
                </Icon>
            </IconsContainer>
        </Container>
    )
}