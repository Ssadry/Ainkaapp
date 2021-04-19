import React from 'react';
import {Container} from './styled';
import {TextInput} from 'react-native';

export default ({placeholder}) => {
    return (
        <Container>
            <TextInput placeholder={placeholder}/>
        </Container>
    )
}