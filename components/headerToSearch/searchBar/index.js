import React, {useState} from 'react';
import { SafeAreaView } from 'react-native';
import {SearchBar, TextInput, Icon} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons'

const PERCENTAJE_SEARCH = 90, PERCENTAJE_IMAGE = 10;

export default ({width}) => {
    const [text, setText] = useState("");
    const textInputWidth = width * (PERCENTAJE_SEARCH / 100);
    const imageWidth = width * (PERCENTAJE_IMAGE / 100);

    return (
        <SafeAreaView>
            <SearchBar width={width}>
                <TextInput placeholder="Buscar..." value={text} onChangeText={setText} width={textInputWidth}/>
                <Icon width={imageWidth}>
                    <FontAwesomeIcon icon={faSearch}/>
                </Icon>
            </SearchBar>
        </SafeAreaView>
    )
}