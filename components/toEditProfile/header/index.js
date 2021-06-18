import React from 'react';
import {Container, AllIcons, Icons, Settings} from './styled';
import GoToBackButton from '../../../components/goToBackButton';
import { SettingsIcon } from '../../../assets/svg/icon';

export default Header = ({navigation}) => {
    return (
        <Container>
            <GoToBackButton
                navigation={navigation}
            />
            <AllIcons>
                <Icons
                    onPress={() => alert('Todavía no sé qué debe hacer este botón.')}
                >
                    <Settings>
                        <SettingsIcon 
                            size={25}
                        />
                    </Settings>
                </Icons>
            </AllIcons>
        </Container>
    )
}