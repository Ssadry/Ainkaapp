import React, {useState, useContext} from 'react';
import {Container, IconsContainer, Icon} from './styled';
import GoToBackButton from '../../goToBackButton';
import {ShareIcon, SettingsIcon} from '../../../assets/svg/icon';
import Dropdown from '../../dropdown';
import {SavedIcon, EditIcon} from '../../../assets/svg/icon';
import {AppContext} from '../../../application/provider';
import {removeData} from '../../../application/asyncStorage';

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
    const [routeName] = useContext(AppContext);
    const [settingsLayout, setSettginsLayout] = useState({
        x: 0, 
        y: 0, 
        width: 50, 
        height: 25,
    });

    const editOrSave = !isOwnProfile ? 
        <Icon
            onPress={() => alert('Guardar')}
        >
            <SavedIcon 
                size={SIZE_ICON}
            />
        </Icon> 
        : 
        <Icon
            onPress={() => alert('Editar')}
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