import React from 'react';
import {
    Container, 
    Element, 
    Photo, 
    PhotoContainer, 
    Top, 
    Bottom, 
    UserName, 
    StarsContainer, 
    Description,
    ContainerInterests,
    Interest,
    InterestText
} from './styled';
import Icon from '../../../../../assets/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <Container>
            <Element>
                <Top>
                    <PhotoContainer>
                        <Photo source={Icon}/>
                    </PhotoContainer>
                </Top>
                <Bottom>
                    <UserName>
                        Nombre de usuario
                    </UserName>
                    <StarsContainer>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </StarsContainer>
                    <Description numberOfLines={3}>
                        Esta es mi descripción; me gustan los gatos, no tengo preferencia en cuestión de géneros musicales, me gusta programar, juego al WoW y me suelen decir que soy un poco raro.
                    </Description>
                    <ContainerInterests>
                        <Interest>
                            <InterestText>
                                Gatitos
                            </InterestText>
                        </Interest>
                        <Interest>
                            <InterestText>
                                Programación
                            </InterestText>
                        </Interest>
                        <Interest>
                            <InterestText>
                                Videojuegos
                            </InterestText>
                        </Interest>
                        <Interest>
                            <InterestText>
                                Escuchar
                            </InterestText>
                        </Interest>
                        <Interest>
                            <InterestText>
                                xd
                            </InterestText>
                        </Interest>
                        <Interest>
                            <InterestText>
                                lol
                            </InterestText>
                        </Interest>
                    </ContainerInterests>
                </Bottom>
            </Element>
        </Container>
    )
}