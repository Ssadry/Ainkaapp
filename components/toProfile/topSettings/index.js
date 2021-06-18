import React, {useState, useContext} from 'react';
import {Container, IconsContainer, Icon, CheckContainer} from './styled';
import GoToBackButton from '../../goToBackButton';
import {ShareIcon, SettingsIcon} from '../../../assets/svg/icon';
import Dropdown from '../../dropdown';
import {SavedIcon, UnsaveIcon, EditIcon} from '../../../assets/svg/icon';
import {AppContext} from '../../../application/provider';
import {removeData} from '../../../application/asyncStorage';
import {CheckBox} from 'react-native-elements';
import Hours from '../../hours';
import defaultColors from '../../../assets/colors/defaultColors.json';

const settingsOptions = {
    own : ['Reportar problemas', 'Cerrar sesión'],
    another : ['Reportar problemas']
};

const SIZE_ICON = 25;

export default TopSettings = ({
    navigation,
    changeSettingsVisibility = () => alert('Ajustes activados'),
    settingsAreActivated = false,
    isOwnProfile = true
}) => {
    const [value, setValue] = useState(false);
    const [routeName] = useContext(AppContext);
    const [settingsLayout, setSettginsLayout] = useState({
        x: 0, 
        y: 0, 
        width: 50, 
        height: 25,
    });

    const editOrSave = !isOwnProfile ? 
        <CheckContainer
            onPress={() => alert('Guardar')}
        >
            <CheckBox
                center
                checkedIcon={<SavedIcon size={30}/>}
                uncheckedIcon={<UnsaveIcon size={30}/>}
                checked={value}
                onPress={() => setValue(!value)}
            />
        </CheckContainer> 
        : 
        <Icon
            onPress={() => navigation.navigate(routeName.editProfile)}
        >
            <EditIcon 
                size={SIZE_ICON}
            />
        </Icon> 

    const handleSettingsOptions = {
        own : [
            () => alert('Problema reportado'),
            () => {
                const key = '@Account';
                removeData(key);
                navigation.navigate(routeName.login, {
                    prevScreen: routeName.profile
                });
            }
        ],
        another : [() => alert('Problema reportado')]
    };

    return (
    <Container>
        <GoToBackButton
            navigation={navigation}
        />
        <IconsContainer>
            <Icon>
                <Hours
                    color={defaultColors.AzulOscuro}
                />
            </Icon>
            {editOrSave}
            <Icon>
                <ShareIcon
                    size={SIZE_ICON}
                />
            </Icon>
            <Icon
                onLayout={
                    ({nativeEvent}) => {
                        const {layout} = nativeEvent;
                        setSettginsLayout(layout);
                    }
                }
                onPress={changeSettingsVisibility}
            >
                <SettingsIcon
                    size={SIZE_ICON}
                />
            </Icon>
            <Dropdown
                parentLayout={settingsLayout}
                isActive={settingsAreActivated}
                optionsArray={isOwnProfile ? settingsOptions.own : settingsOptions.another}
                optionsHandle={isOwnProfile ? handleSettingsOptions.own : handleSettingsOptions.another}
            />
        </IconsContainer>
    </Container>
    )
}