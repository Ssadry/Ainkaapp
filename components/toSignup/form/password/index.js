import React from 'react';
import {Container, Eye, Input} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {TextInput} from 'react-native';

export default ({placeholder}) => {
    return (
        <Container>
            <Input secureTextEntry={true} placeholder={placeholder}/>
            <Eye>
                <FontAwesomeIcon icon={faEyeSlash} size='30px'/>
            </Eye>
        </Container>
    )
}