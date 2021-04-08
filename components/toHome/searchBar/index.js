import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';
import {StyledView, StyledTextInput, StyledImage} from './styled';

const PERCENTAJE_SEARCH = 85, PERCENTAJE_IMAGE = 15;

export default ({width}) => {
    const [text, setText] = useState("");
    const textInputWidth = width * (PERCENTAJE_SEARCH / 100);
    const imageWidth = width * (PERCENTAJE_IMAGE / 100);

    return (
        <SafeAreaView>
            <StyledView width={width}>
                <StyledTextInput placeholder="Buscar..." value={text} onChangeText={setText} width={textInputWidth}/>
                <StyledImage width={imageWidth}/>
            </StyledView>
        </SafeAreaView>
    )
}