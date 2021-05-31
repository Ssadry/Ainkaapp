import React from 'react';
import {Container, Title, TitleAndIcon, Icon} from './styled';
import GoToBackButton from '../../../components/goToBackButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

export default Header = ({navigation}) => {
    return (
        <Container>
            <GoToBackButton
                navigation={navigation}
            />
            <TitleAndIcon>
                <Title>
                    Publicar anuncio
                </Title>
                <Icon
                    onPress={() => alert('Todavía no sé qué debe hacer este botón.')}
                >
                    <FontAwesomeIcon 
                        icon={faEllipsisV}
                        size={25}
                    />
                </Icon>
            </TitleAndIcon>
        </Container>
    )
}