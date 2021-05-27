import React from 'react';
import {Container, TextInput, IconButton} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default Input = ({width, placeHolder, setValue, value, canTextHide}) => {
    const [secureTextEntry, setSecureTextEntry] = React.useState(canTextHide);

    return (
        <Container
            width={width}
        >
            <TextInput 
                placeholder={placeHolder}
                onChangeText={(text) => setValue(text)}
                defaultText={value}
                secureTextEntry={secureTextEntry}
            />
            <IconButton 
                isVisible={canTextHide}
                onPress={() => {
                    setSecureTextEntry(!secureTextEntry);
                }}
            >
                <FontAwesomeIcon icon={secureTextEntry ? faEye : faEyeSlash}/>
            </IconButton>
        </Container>
    )
}