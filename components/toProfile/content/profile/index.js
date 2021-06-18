import React from 'react';
import {
    Container, 
    Top, 
    BarContainer, 
    EmptyBar, 
    FillBar, 
    Star, 
    Total,
    Exchanges, 
    LeftExchanges,
    AmountLeftExchanges,
    TextLeftExchanges,
    RightExchanges,
    AmountRightExchanges,
    TextRightExchanges,
    Bottom,
    Title,
    Description,
    ImagesContainer,
    ImageContainer,
    Image,
    SocialsWebs,
    SocialWeb,
    SocialWebTitle,
    SocialWebText
} from './styled';
import { StarIcon } from '../../../../assets/svg/icon';
import defaultColors from '../../../../assets/colors/defaultColors.json';
import { ArtIcon, KitchenIcon, SportIcon, MusicIcon } from '../../../../assets/svg/icon';

const SIZE_ICON = 30;

export default Profile = ({currentState = 0, pos = 0}) => {
    return (
        <Container
            currentState={currentState}
            pos={pos}
        >
            <Top>
                <BarContainer>
                    <EmptyBar>
                        <FillBar/>
                        <Star>
                            <StarIcon
                                size={40}
                            />
                            <Total>
                                12
                            </Total>
                        </Star>
                    </EmptyBar>
                </BarContainer> 
                <Exchanges>
                    <LeftExchanges>
                        <AmountLeftExchanges
                            color={defaultColors.AzulOscuro}
                        >
                            7
                        </AmountLeftExchanges>
                        <TextLeftExchanges
                            color={defaultColors.Lila}
                        >
                            Intercambios ofrecidos
                        </TextLeftExchanges>
                    </LeftExchanges>
                    <RightExchanges>
                        <AmountRightExchanges
                            color={defaultColors.AzulOscuro}        
                        >
                            12
                        </AmountRightExchanges>
                        <TextRightExchanges
                            color={defaultColors.Lila}
                        >
                            Intercambios realizados
                        </TextRightExchanges>
                    </RightExchanges>
                </Exchanges>
            </Top>
            <Bottom>
                <Title>
                    Descripción
                </Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui lorem, congue in nisl ac, fermentum convallis ipsum. Nulla nec luctus ipsum. Donec luctus lorem dui, nec elementum tortor consectetur eget. Pellentesque convallis turpis ac arcu eleifend, vitae pellentesque mi et.
                </Description>
                <Title>
                    Intereses
                </Title>
                <ImagesContainer>
                    <ImageContainer>
                        <ArtIcon
                            size={SIZE_ICON}
                        />
                    </ImageContainer>
                    <ImageContainer>
                        <KitchenIcon
                            size={SIZE_ICON}
                        />  
                    </ImageContainer>
                    <ImageContainer>
                        <SportIcon
                            size={SIZE_ICON}
                        />
                    </ImageContainer>
                    <ImageContainer>
                        <MusicIcon
                            size={SIZE_ICON}
                        />
                    </ImageContainer>
                </ImagesContainer>
                <Title>
                    Me puedes encontrar también en...
                </Title>
                <SocialsWebs>
                    <SocialWeb>
                        <SocialWebTitle
                            color={defaultColors.Lila}
                        >
                            Instagram:
                        </SocialWebTitle>
                        <SocialWebText>
                            ofijrtoñgifjewgñnjoñiwj
                        </SocialWebText>
                    </SocialWeb>
                    <SocialWeb>
                        <SocialWebTitle
                            color={defaultColors.Lila}
                        >                            
                            Facebook:
                        </SocialWebTitle>
                        <SocialWebText>
                            fjw´ñrjogñirnjwgfñoignrtñgnteo
                        </SocialWebText>
                    </SocialWeb>
                    <SocialWeb>
                        <SocialWebTitle
                            color={defaultColors.Lila}
                        >                            
                        LinkedIn:
                        </SocialWebTitle>
                        <SocialWebText>
                            aewdfjiewhfurluihneinforefrefre
                        </SocialWebText>
                    </SocialWeb>
                </SocialsWebs>
            </Bottom>
        </Container>
    )
}