import React from 'react';
import {Container, Title, TitleAndIcon, Icons, Edit, Share, Settings} from './styled';
import GoToBackButton from '../../../components/goToBackButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsisV, faPen, faShareAlt } from '@fortawesome/free-solid-svg-icons'

export default Header = ({navigation}) => {
    return (
        <Container>
            <GoToBackButton
                navigation={navigation}
            />
            <TitleAndIcon>
                <Title>
                    Editar anuncio
                </Title>
                <Icons
                    onPress={() => alert('Todavía no sé qué debe hacer este botón.')}
                >
                    <Edit>
                        <FontAwesomeIcon 
                            icon={faPen}
                            size={20}
                        />
                    </Edit>
                    <Share>
                        <FontAwesomeIcon
                            icon={faShareAlt}
                            size={20}
                        />
                    </Share>
                    <Settings>
                        <FontAwesomeIcon 
                            icon={faEllipsisV}
                            size={20}
                        />
                    </Settings>
                </Icons>
            </TitleAndIcon>
        </Container>
    )
}