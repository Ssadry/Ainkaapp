import React from 'react';
import { Container } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Text, TouchableOpacity } from 'react-native';

export default () => {
    return (
        <Container>
            <TouchableOpacity onPress={() => alert("xd")}>
                <Text>
                    <FontAwesomeIcon icon={faArrowLeft} size={20}/>
                </Text>
            </TouchableOpacity>
        </Container>
    )
}
