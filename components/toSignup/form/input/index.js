import React from 'react';
import {Container,} from './styled';
import {TextInput} from 'react-native';

export default ({placeholder, text, setText}) => {
    return (
        <Container>
            <TextInput placeholder={placeholder} defaultValue={text} onChangeText={text => setText(text)}/>
        </Container>
    )
}