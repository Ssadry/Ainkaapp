import React from 'react';
import {Container, Profile, PhotoContainer, Photo, Name, AllImagesContainer, Image, ImageContainer, Line} from './styled';
import TopSettings from './topSettings';
import Icon from '../../../assets/icon.png';
import {Dimensions} from 'react-native';
import BackgroundDropdown from '../../../components/dropdown/background';

const lineWidth = Math.round(Dimensions.get('screen').width);

export default Header = () => {
    const [settingsAreActivated, setSettingsAreActivated] = React.useState(false);
    return (
        <Container>
            <TopSettings
                changeSettingsVisibility={() => setSettingsAreActivated(!settingsAreActivated)}
                settingsAreActivated={settingsAreActivated}
            />
            <Profile>
                <PhotoContainer>
                    <Photo
                        source={Icon}
                        resizeMode='stretch'
                    />
                </PhotoContainer>
                <Name>
                    Paquita
                </Name>
            </Profile>
            <AllImagesContainer>
                <ImageContainer>
                    <Image
                        source={Icon}
                        resizeMode='stretch'
                    />
                </ImageContainer>
                <ImageContainer>
                    <Image
                        source={Icon}
                        resizeMode='stretch'
                    />
                </ImageContainer>
                <ImageContainer>
                    <Image
                        source={Icon}
                        resizeMode='stretch'
                    />
                </ImageContainer>
                <ImageContainer>
                    <Image
                        source={Icon}
                        resizeMode='stretch'
                    />
                </ImageContainer>
            </AllImagesContainer>
            <Line 
                width={lineWidth}
            />
            <BackgroundDropdown 
                click={() => setSettingsAreActivated(!settingsAreActivated)}
                isActivated={settingsAreActivated}
            />
        </Container>
    )
}