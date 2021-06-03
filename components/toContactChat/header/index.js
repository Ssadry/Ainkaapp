import React from 'react';
import {Container, Profile, PhotoContainer, Photo, Name, AllImagesContainer, Image, ImageContainer, Line} from './styled';
import TopSettings from './topSettings';
import Icon from '../../../assets/icon.png';
import {Dimensions} from 'react-native';

const lineWidth = Math.round(Dimensions.get('screen').width);

export default Header = () => {
    return (
        <Container>
            <TopSettings/>
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
        </Container>
    )
}