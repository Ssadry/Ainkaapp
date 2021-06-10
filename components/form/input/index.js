import React, {useState} from 'react';
import {Container, TextInput, IconButton, Line, Content, TextsContainer, ErrorText, LengthText} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default Input = ({
    width = 200,
    placeHolder = 'Place holder',
    setValue, 
    value, 
    canTextHide = false,
    isCorrect = false, 
    errorText = 'Error text',
    keyboardType = 'default',
    numberOfLines = 1,
    multiline = false,
    maxLength = null
}) => {
    const [secureTextEntry, setSecureTextEntry] = useState(canTextHide);
    const [hasBeenFocused, setHasBeenFocused] = useState(false);

    return (
        <Container
            width={width}
        >
            <Content>
                <TextInput 
                    placeholder={placeHolder}
                    onChangeText={(text) => setValue(text)}
                    defaultText={value}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    onFocus={() => setHasBeenFocused(false)}
                    numberOfLines={numberOfLines}
                    multiline={multiline}
                    onEndEditing={() => setHasBeenFocused(true)}
                    maxLength={maxLength}
                />
                <IconButton 
                    isVisible={canTextHide}
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                >
                    <FontAwesomeIcon 
                        icon={secureTextEntry ? faEye : faEyeSlash}
                        size={20}
                    />
                </IconButton>
                <Line
                    width={width}
                    isCorrect={isCorrect}
                    hasBeenFocused={hasBeenFocused}
                />
            </Content>
            <TextsContainer
                width={width}
            >
                <LengthText
                    maxLength={maxLength}
                    currentValueLength={value.length}
                    hasBeenFocused={hasBeenFocused}
                >
                    {maxLength - value.length} caracteres restantes
                </LengthText>
                <ErrorText
                    isCorrect={isCorrect}
                    hasBeenFocused={hasBeenFocused}
                >
                    {errorText}
                </ErrorText>
            </TextsContainer>

        </Container>
    )
}