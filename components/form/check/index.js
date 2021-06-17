import React from 'react';
import {CheckBox} from 'react-native-elements';
import {Container, Text, CheckBoxContainer} from './styled';
import {CheckIcon, UnCheckIcon} from '../../../assets/svg/icon';

export default Check = ({
    setValue, 
    value, 
    text = 'Default',
    width = 200
}) => {
    return (
        <Container
            width={width}
        >
            <CheckBoxContainer>
                <CheckBox
                    center
                    checkedIcon={<CheckIcon size={30}/>}
                    uncheckedIcon={<UnCheckIcon size={30}/>}
                    checkedColor='black'
                    uncheckedColor='white'
                    checked={value}
                    onPress={() => setValue(!value)}
                />
            </CheckBoxContainer>
            <Text>
                {text}
            </Text>
        </Container>
    )
}