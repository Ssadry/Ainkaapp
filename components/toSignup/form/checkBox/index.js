import React from 'react';
import {Container, Text, ButtonText} from './styled';
import {CheckBox} from 'react-native';

export default ({isSelected, setSelection}) => {
    return (
        <Container>
            <CheckBox 
                value={isSelected}
                onValueChange={setSelection}
            />
            <ButtonText onPress={() => setSelection(!isSelected)}>
                <Text>
                    Al registrarme confirmo que regalo mi alma a satancito chingón.
                </Text>
            </ButtonText>
        </Container>
    )
}
