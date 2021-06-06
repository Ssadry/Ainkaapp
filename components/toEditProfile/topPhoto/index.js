import React from 'react';
import {Container, Line, PhotoServicie, Title, Button, TopSettings, IconsContainer, Image} from './styled';
import {Dimensions} from 'react-native';
import GoToBackButton from '../../goToBackButton';
import Dropdown from '../../dropdown';
import BackgroundDropdown from '../../dropdown/background';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
// import TopSettings from '../topSettings';

const {width} = Dimensions.get('screen');

export default Header = ({
    navigation,
    icon = Image,
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
            <PhotoServicie
                width={width}
            >
                <TopSettings>
                    <GoToBackButton
                        navigation={navigation}
                    />
                    <IconsContainer>
                        <Image>
                            <FontAwesomeIcon 
                                icon={faPen}
                                size={25}
                                color={'green'}
                            />
                        </Image>
                        <Image
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
                        </Image>
                        <Dropdown
                            parentLayout={settingsLayout}
                            isActive={settingsAreActivated}
                            optionsArray={['Reportar problemas']}
                            optionsHandle={[() => alert('problema reportado')]}
                        />

                    </IconsContainer>
                </TopSettings>
                {/* <Button
                    onPress={() => alert('cambiar')}
                >
                    <Title>
                        Cambiar
                    </Title>
                </Button> */}
            </PhotoServicie>
            <Line
                width={width}
            />
            {/* <BackgroundDropdown
                click={changeSettingsVisibility}
                isActivated={settingsAreActivated}
            /> */}
        </Container>
    )
}