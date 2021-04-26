import React from 'react';
import {Container} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default () => {
    return (
        <Container>
            <FontAwesomeIcon icon={faTimes} size='30px'/>
        </Container>
    )
}