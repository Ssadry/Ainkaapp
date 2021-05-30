import React from 'react';
import {Container, TextInput, IconButton, Line, Content, TextsContainer, ErrorText, LengthText} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';

export default Input = ({
    width, 
    placeHolder = 'Place holder',
    setValue, 
    value, 
    canTextHide, 
    isCorrect = false, 
    errorText = 'Error text',
    keyboardType = 'default',
    numberOfLines = 1,
    multiline = false,
    maxLength = -1
}) => {
    const [secureTextEntry, setSecureTextEntry] = React.useState(canTextHide);
    const [hasBeenFocused, setHasBeenFocused] = React.useState(false);

    return (
        <Container
            width={width}
        >
            <Content>
                <TextInput 
                    placeholder={placeHolder}
                    onChangeText={(text) => setValue(text.trim())}
                    defaultText={value}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    onFocus={() => setHasBeenFocused(false)}
                    numberOfLines={numberOfLines}
                    multiline={multiline}
                    onEndEditing={() => setHasBeenFocused(true)}
                    maxLength={maxLength === -1 ? value.length + 2 : maxLength}
                />
                <IconButton 
                    isVisible={canTextHide}
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                >
                    <FontAwesomeIcon icon={secureTextEntry ? faEye : faEyeSlash}/>
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