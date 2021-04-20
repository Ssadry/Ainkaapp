import React from 'react';
import { Container } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Text, TouchableOpacity } from 'react-native';

export default () => {
    return (
        <Container>
            <TouchableOpacity>
                <Text>
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                </Text>
            </TouchableOpacity>
        </Container>
    )
}
