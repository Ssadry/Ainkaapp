import React from 'react';
import {Container, IconsContainer, Icon} from './styled';
import GoToBackButton from '../../goToBackButton';
import { ShareIcon, UnsaveIcon, SettingsIcon } from '../../../assets/svg/icon';

const SIZE_ICON = 25;

export default Header = ({navigation}) => {
    return (
        <Container>
            <GoToBackButton
                navigation={navigation}
            />
            <IconsContainer
                onPress={() => alert('Todavía no sé qué debe hacer este botón.')}
            >
                <Icon>
                    <UnsaveIcon
                        size={SIZE_ICON}
                    />
                </Icon>
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
    )
}