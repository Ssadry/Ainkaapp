import React from 'react';
import {Send, TextInput, Left, Right, InputContainer, ButtonContainer, Button} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <Send>
            <Left>
                <InputContainer>
                    <TextInput placeholder="Escribe..."/>
                </InputContainer>
            </Left>
            <Right>
                <ButtonContainer>
                    <Button>
                        <FontAwesomeIcon icon={faPaperPlane} size={15}/>
                    </Button>
                </ButtonContainer>
            </Right>
        </Send>
    )
}