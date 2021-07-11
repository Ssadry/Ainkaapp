import React from 'react';
import {CheckBox} from 'react-native-elements';
import {Container, Text, CheckBoxContainer} from './styled';
import {CheckIcon, UnCheckIcon} from '../../../assets/svg/icon';

const ICON_SIZE = 30;

export default Check = ({
    setValue, 
    value, 
    text = 'Default',
    width = 200,
    unchangingTruth = false
}) => {
    return (
        <Container
            width={width}
        >
            <CheckBoxContainer>
                <CheckBox
                    center
                    checkedIcon={<CheckIcon size={ICON_SIZE}/>}
                    uncheckedIcon={<UnCheckIcon size={ICON_SIZE}/>}
                    checkedColor='black'
                    uncheckedColor='white'
                    checked={value}
                    onPress={() => unchangingTruth ? setValue(true) : setValue(!value)}
                />
            </CheckBoxContainer>
            <Text>
                {text}
            </Text>
        </Container>
    )
}