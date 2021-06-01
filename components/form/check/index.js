import React from 'react';
import {CheckBox} from 'react-native-elements';
import {Container, Text, CheckBoxContainer} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckSquare, faSquareFull } from '@fortawesome/free-solid-svg-icons'

export default Check = ({
    setValue, 
    value, 
    text = 'Default',
    width = 200
}) => {
    return (
        <Container
            width={width}
        >
            <CheckBoxContainer>
                <CheckBox
                    center
                    checkedIcon={<FontAwesomeIcon icon={faCheckSquare}/>}
                    uncheckedIcon={<FontAwesomeIcon icon={faSquareFull}/>}
                    checkedColor='black'
                    uncheckedColor='white'
                    checked={value}
                    onPress={() => setValue(!value)}
                />
            </CheckBoxContainer>
            <Text>
                {text}
            </Text>
        </Container>
    )
}