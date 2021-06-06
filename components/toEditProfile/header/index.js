import React from 'react';
import {Container, Title, AllIcons, Icons, Edit, Settings} from './styled';
import GoToBackButton from '../../../components/goToBackButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsisV, faPen } from '@fortawesome/free-solid-svg-icons'

export default Header = ({navigation}) => {
    return (
        <Container>
            <GoToBackButton
                navigation={navigation}
            />
            <AllIcons>
                <Icons
                    onPress={() => alert('Todavía no sé qué debe hacer este botón.')}
                >
                    <Edit>
                        <FontAwesomeIcon 
                            icon={faPen}
                            size={20}
                        />
                    </Edit>
                    <Settings>
                        <FontAwesomeIcon 
                            icon={faEllipsisV}
                            size={20}
                        />
                    </Settings>
                </Icons>
            </AllIcons>
        </Container>
    )
}