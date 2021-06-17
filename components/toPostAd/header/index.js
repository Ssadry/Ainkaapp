import React from 'react';
import {Container, Title, TitleAndIcon, Icon} from './styled';
import GoToBackButton from '../../../components/goToBackButton';

import {SettingsIcon} from '../../../assets/svg/icon';

export default Header = ({navigation}) => {
    return (
        <Container>
            <GoToBackButton
                navigation={navigation}
            />
            <TitleAndIcon>
                <Title>
                    Publicar anuncio
                </Title>
                <Icon
                    onPress={() => alert('Todavía no sé qué debe hacer este botón.')}
                >
                    <SettingsIcon
                        size={25}
                    />
                </Icon>
            </TitleAndIcon>
        </Container>
    )
}