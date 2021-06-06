import React from 'react';
import {Container, IconsContainer, Icon} from './styled';
import GoToBackButton from '../../goToBackButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../../dropdown';

export default Header = ({
    navigation,
    changeSettingsVisibility = () => alert('Ajustes activados'),
    settingsAreActivated = false
}) => {
    const [settingsLayout, setSettginsLayout] = React.useState({
        x: 0, 
        y: 0, 
        width: 50, 
        height: 25,
    });
    return (
        <Container>
            <GoToBackButton
                navigation={navigation}
            />
            <IconsContainer>
                <Icon>
                    <FontAwesomeIcon 
                        icon={faPen}
                        size={25}
                        color={'green'}
                    />
                </Icon>
                <Icon
                    onLayout={
                        ({nativeEvent}) => {
                            const {layout} = nativeEvent
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
                    optionsArray={['Reportar problemas']}
                    optionsHandle={[() => alert('problema reportado')]}
                />
            </IconsContainer>
        </Container>
    )
}