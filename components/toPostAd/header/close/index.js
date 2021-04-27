import React, {useContext} from 'react';
import {Container} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {AppContext} from '../../../../application/provider';

export default () => {
    const [popUpIsVisible, setPopUpIsVisible] = useContext(AppContext);

    return (
        <Container onPress={() => setPopUpIsVisible(false)}>
            <FontAwesomeIcon icon={faTimes} size='30px'/>
        </Container>
    )
}