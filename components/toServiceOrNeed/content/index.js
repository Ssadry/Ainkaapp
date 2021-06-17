import React from 'react';
import {
    Container, 
    Info, 
    TopLeft, 
    IconsContainer, 
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
    ButtonContainer,
    Bottom,
    HoursContainer
} from './styled';
import {Dimensions} from 'react-native';
import Icon from '../../../assets/icon.png';
import FatButton from '../../form/button/fat';
import { OnlineIcon, InPersonIcon, FreeChangeIcon, StarIcon, SportIcon, ArtIcon, MusicIcon, TechnologyIcon } from '../../../assets/svg/icon';
import defaultColors from '../../../assets/colors/defaultColors.json';

const padding = Math.round(Dimensions.get('screen').width) * 0.2;
const SIZE_ICON = 32;

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
                        <SportIcon                        
                            size={'100%'}
                        />
                    </ImageContainer>
                    <ImageContainer>
                        <ArtIcon                        
                            size={'100%'}
                        />
                    </ImageContainer>
                    <ImageContainer>
                        <MusicIcon                        
                            size={'100%'}
                        />
                    </ImageContainer>
                    <ImageContainer>
                        <TechnologyIcon                        
                            size={'100%'}
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
                </TitleLocationIcons>
                <Middle>
                    <Description>
                        Descripción
                    </Description>
                </Middle>
                <Paraph>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Paraph>
                <IconsContainer>
                    <TopRightImage>
                        <InPersonIcon
                            size={SIZE_ICON}
                        />
                    </TopRightImage>
                    <TopRightImage>
                        <OnlineIcon 
                            size={32}
                        />
                    </TopRightImage>
                    <TopRightImage>
                        <FreeChangeIcon 
                            size={32}
                        />
                    </TopRightImage>
                    <HoursContainer>
                        <Hours
                            color={defaultColors.AzulOscuro}
                        >
                            2h
                        </Hours>
                    </HoursContainer>
                </IconsContainer>
                <Bottom>
                    <StarsContainer
                        isNeed={isNeed}
                    >
                        <Star>
                            <StarIcon 
                                size={25}
                            />
                        </Star>
                        <Star>
                            <StarIcon 
                                size={25}
                            />
                        </Star>
                        <Star>
                            <StarIcon 
                                size={25}
                            />
                        </Star>
                        <Star>
                            <StarIcon 
                                size={25}
                            />
                        </Star>
                        <Star>
                            <StarIcon 
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
                </Bottom>
            </Info>
        </Container>
    )
}