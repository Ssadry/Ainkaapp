import React from 'react';
import {Container, Title, TitleAndIcon, Icons, Settings} from './styled';
import GoToBackButton from '../../../components/goToBackButton';
import { SettingsIcon } from '../../../assets/svg/icon';

const SIZE_ICON = 25;

export default Header = ({navigation}) => {
    return (
        <Container>
            <GoToBackButton
                navigation={navigation}
            />
            <TitleAndIcon>
                <Title>
                    Editar anuncio
                </Title>
                <Icons
                    onPress={() => alert('Todavía no sé qué debe hacer este botón.')}
                >
                    <Settings>
                        <SettingsIcon 
                            size={SIZE_ICON}
                        />
                    </Settings>
                </Icons>
            </TitleAndIcon>
        </Container>
    );
};