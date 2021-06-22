import React, {useState} from 'react';
import {Container, TextInput, AreaToWrite, MaxCharacters} from './styled';
import defaultColors from '../../../assets/colors/defaultColors.json';
import {ScrollView} from 'react-native';

export default InputDescription = ({
    maxLength = null,
    value,
    setValue,
}) => {
    const [inputDescription, setInputDescription] = useState(null);
    const [containerTouch, setContainerTouch] = useState(false);

    return (
        <Container>
            <AreaToWrite
                lineColor={defaultColors.Lila}
                onPress={() => inputDescription.focus()}   
            >
                <ScrollView
                    nestedScrollEnabled={true}
                >
                    <TextInput
                        ref={(input) => setInputDescription(input)}
                        onChangeText={(text) => setValue(text)}
                        defaultText={value}
                        multiline={true}
                        numberOfLines={1}
                        placeholder={'Escribe aquí...'}
                        maxLength={maxLength}
                    />
                </ScrollView>
            </AreaToWrite>
            <MaxCharacters
                maxLength={maxLength}
            >
                Máximo de caracteres({maxLength - value.length})
            </MaxCharacters>
        </Container>
    )
}