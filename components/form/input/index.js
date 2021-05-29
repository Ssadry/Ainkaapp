import React from 'react';
import {Container, TextInput, IconButton, Line, Content, ErrorTextContainer, ErrorText} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default Input = ({
    width, 
    placeHolder = 'Place holder',
    setValue, 
    value, 
    canTextHide, 
    isCorrect = false, 
    errorText = 'Error text',
    keyboardType = 'default'
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
                    onFocus={() => setHasBeenFocused(true)}
                />
                <IconButton 
                    isVisible={canTextHide}
                    onPress={() => {
                        setSecureTextEntry(!secureTextEntry);
                    }}
                >
                    <FontAwesomeIcon icon={secureTextEntry ? faEye : faEyeSlash}/>
                </IconButton>
                <Line
                    width={width}
                    isCorrect={isCorrect}
                    hasBeenFocused={hasBeenFocused}
                />
            </Content>
            <ErrorTextContainer
                width={width}
            >
                <ErrorText
                    isCorrect={isCorrect}
                    hasBeenFocused={hasBeenFocused}
                >
                    {errorText}
                </ErrorText>
            </ErrorTextContainer>
        </Container>
    )
}