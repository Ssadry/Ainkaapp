import React from 'react';
import {Container, IconsContainer, Icon} from './styled';
import GoToBackButton from '../../../goToBackButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../../../dropdown';

export default Header = ({
    navigation,
    changeSettingsVisibility = () => alert('Ajustes activados'),
    settingsAreActivated = false
}) => {
    const [parentLayout, setParentLayout] = React.useState({
        x: 0, y: 0, width: 100, height: 20
    });
    return (
        <Container>
            <GoToBackButton
                navigation={navigation}
            />
            <IconsContainer>
                <Icon
                    onLayout={
                        ({nativeEvent}) => {
                            const {layout} = nativeEvent;
                            setParentLayout(layout);
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
                    parentLayout={parentLayout}
                    optionsArray={['Reportar', 'Eliminar contacto']}
                    optionsHandle={[() => alert('Reportado'), () => alert('Eliminar contacto')]}
                    isActive={settingsAreActivated}
                />
            </IconsContainer>
        </Container>
    )
}