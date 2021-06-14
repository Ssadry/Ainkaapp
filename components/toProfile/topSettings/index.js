import React, {useState, useContext} from 'react';
import {Container, IconsContainer, Icon} from './styled';
import GoToBackButton from '../../goToBackButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShareAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../../dropdown';
import {SavedIcon} from '../../../assets/svg/icon';
import { AppContext } from '../../../application/provider';
import {removeData} from '../../../application/asyncStorage';

const settingsOptions = {
    own : ['Reportar problemas', 'Cerrar sesión'],
    another : ['Reportar problemas']
};

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

    const handleSettingsOptions = {
        own : [
            () => alert('Problema reportado'),
            () => {
                const key = '@Account';
                removeData(key);
                navigation.navigate(routeName.login, {prevScreen: routeName.profile})
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
                <SavedIcon 
                    size={30}
                />
            </Icon>
            <Icon>
                <FontAwesomeIcon 
                    icon={faShareAlt}
                    size={25}
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
                <FontAwesomeIcon 
                    icon={faEllipsisV}
                    size={25}
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