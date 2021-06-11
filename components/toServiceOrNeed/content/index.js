import React from 'react';
import {
    Container, 
    Info, 
    TopLeft, 
    TopRight, 
    Middle, 
    Paraph, 
    Title, 
    Location, 
    PhotoProfileContainer, 
    Name, 
    Images, 
    ImageContainer, 
    Image, 
    PhotoProfile,
    Profile,
    TopRightImage,
    Description,
    Hours,
    TitleLocationIcons,
    StarsContainer,
    Star,
    ButtonContainer
} from './styled';
import {Dimensions} from 'react-native';
import Icon from '../../../assets/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSmile, faGlobe, faLink, faStar } from '@fortawesome/free-solid-svg-icons'
import FatButton from '../../form/button/fat';

const padding = Dimensions.get('screen').width * 0.2;

export default Content = ({
    navigation,
    title = 'Título necesidad',
    isNeed = true,
    handleButton = () => alert('click'),
    textButton = 'CUBRIR NECESIDAD'
}) => {
    return (
        <Container
            myPadding={padding}
        >
            <Profile>
                <PhotoProfileContainer>
                    <PhotoProfile 
                        resizeMode='stretch'
                        source={Icon}
                    />
                </PhotoProfileContainer>
                <Name>
                    Nombre
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
            </Profile>
            <Info>
                <TitleLocationIcons>
                    <TopLeft>
                        <Title>
                            {title}
                        </Title>
                        <Location>
                            Ubicación
                        </Location>
                    </TopLeft>
                    <TopRight>
                        <TopRightImage>
                            <FontAwesomeIcon 
                                icon={faSmile}
                                size={32}
                            />
                        </TopRightImage>
                        <TopRightImage>
                            <FontAwesomeIcon 
                                icon={faGlobe}
                                size={32}
                            />
                        </TopRightImage>
                        <TopRightImage>
                            <FontAwesomeIcon 
                                icon={faLink}
                                size={32}
                            />
                        </TopRightImage>
                    </TopRight>
                </TitleLocationIcons>
                <Middle>
                    <Description>
                        Descripción
                    </Description>
                    <Hours>
                        2h
                    </Hours>
                </Middle>
                <Paraph>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Paraph>
                <StarsContainer
                    isNeed={isNeed}
                >
                    <Star>
                        <FontAwesomeIcon 
                            icon={faStar}
                            size={25}
                        />
                    </Star>
                    <Star>
                        <FontAwesomeIcon 
                            icon={faStar}
                            size={25}
                        />
                    </Star>
                    <Star>
                        <FontAwesomeIcon 
                            icon={faStar}
                            size={25}
                        />
                    </Star>
                    <Star>
                        <FontAwesomeIcon 
                            icon={faStar}
                            size={25}
                        />
                    </Star>
                    <Star>
                        <FontAwesomeIcon 
                            icon={faStar}
                            size={25}
                        />
                    </Star>
                </StarsContainer>
                <ButtonContainer>
                    <FatButton
                        click={handleButton}
                    >
                        {textButton}
                    </FatButton>
                </ButtonContainer>
            </Info>
        </Container>
    )
}