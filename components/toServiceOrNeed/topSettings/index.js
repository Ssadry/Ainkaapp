import React, {useState} from 'react';
import {Container, IconsContainer, Icon, CheckBoxContainer} from './styled';
import GoToBackButton from '../../goToBackButton';
import { ShareIcon, UnsaveIcon, SettingsIcon, SavedIcon } from '../../../assets/svg/icon';
import {CheckBox} from 'react-native-elements';


const SIZE_ICON = 25;

export default TopSettings = ({navigation}) => {
    const [value, setValue] = useState(false);
    return (
        <Container>
            <GoToBackButton
                navigation={navigation}
            />
            <IconsContainer
                onPress={() => alert('Todavía no sé qué debe hacer este botón.')}
            >
                <CheckBoxContainer
                    size={SIZE_ICON}
                >
                    <CheckBox
                        center
                        checkedIcon={<SavedIcon size={SIZE_ICON}/>}
                        uncheckedIcon={<UnsaveIcon size={SIZE_ICON}/>}
                        checked={value}
                        onPress={() => setValue(!value)}
                    />
                </CheckBoxContainer>
                <Icon>
                    <ShareIcon
                        size={SIZE_ICON}
                    />
                </Icon>
                <Icon>
                    <SettingsIcon
                        size={SIZE_ICON}
                    />
                </Icon>
            </IconsContainer>
        </Container>
    );
};