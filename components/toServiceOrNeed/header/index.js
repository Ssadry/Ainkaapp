import React from 'react';
import {Container, Line, PhotoServicie, PhotoProfileContainer, PhotoProfile, Name, Content, Images, Image, ImageContainer} from './styled';
import {Dimensions} from 'react-native';
import Icon from '../../../assets/icon.png';

const {width} = Dimensions.get('screen');

export default Header = () => {
    return (
        <Container>
            <PhotoServicie>

            </PhotoServicie>
            <Line
                width={width}
            />
            <Content>
                <PhotoProfileContainer>
                    <PhotoProfile 
                        resizeMode='stretch'
                        source={Icon}
                    />
                </PhotoProfileContainer>
                <Name>
                    Name
                </Name>
                <Images>
                    <ImageContainer>
                        <Image                        
                            resizeMode='stretch'
                            source={Icon}
                        />
                    </ImageContainer>
                    <ImageContainer>
                        <Image                        
                            resizeMode='stretch'
                            source={Icon}
                        />
                    </ImageContainer>
                    <ImageContainer>
                        <Image                        
                            resizeMode='stretch'
                            source={Icon}
                        />
                    </ImageContainer>
                    <ImageContainer>
                        <Image                        
                            resizeMode='stretch'
                            source={Icon}
                        />
                    </ImageContainer>
                </Images>
            </Content>
        </Container>
    )
}