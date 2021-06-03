import React from 'react';
import {Send, TextInput, Left, Right, InputContainer, ButtonContainer, Button} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default ({click, scrollToEnd}) => {
    return (
        <Send>
            <Left>
                <InputContainer>
                    <TextInput 
                        placeholder="Escribe..."
                        onFocus={scrollToEnd}
                    />
                </InputContainer>
            </Left>
            <Right>
                <ButtonContainer>
                    <Button
                        onPress={click}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} size={15}/>
                    </Button>
                </ButtonContainer>
            </Right>
        </Send>
    )
}