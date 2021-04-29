import React from 'react';
import {
    Container,
    ImageContainer,
    Image,
    Name,
    StarsContainer,
    Description,
    Interests,
    InterestsContainer
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../../../assets/icon.png';

export default ({ width }) => {
    return (
        <Container>
            <ImageContainer width={width * 0.7}>
                <Image source={Icon} width={width * 0.7} />
            </ImageContainer>
            <Name>
                Nombre de usuario
            </Name>
            <StarsContainer>
                <FontAwesomeIcon icon={faStar} size={20}/>
                <FontAwesomeIcon icon={faStar} size={20}/>
                <FontAwesomeIcon icon={faStar} size={20}/>
                <FontAwesomeIcon icon={faStar} size={20}/>
                <FontAwesomeIcon icon={faStar} size={20}/>
            </StarsContainer>
            <Description>
                Descripción
            </Description>
            <InterestsContainer>
                <Interests>
                    Interés
                </Interests>
                <Interests>
                    Interés
                </Interests>
            </InterestsContainer>
        </Container>
    )
}