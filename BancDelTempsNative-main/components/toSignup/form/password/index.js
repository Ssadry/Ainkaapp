import React from 'react';
import {Container, Eye, Input} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default ({placeholder, text, setText, isVisible, setVisible}) => {
    return (
        <Container>
            <Input 
                secureTextEntry={true} 
                placeholder={placeholder} 
                defaultValue={text} 
                onChangeText={text => setText(text)} 
                secureTextEntry={!isVisible}/>
            <Eye onPress={() => setVisible(!isVisible)}>
                <FontAwesomeIcon icon={isVisible ? faEye : faEyeSlash} size='30px'/>
            </Eye>
        </Container>
    )
}