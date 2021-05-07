import React from 'react';
import {
    Container,
    Element,
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
import Icon from '../../../../../../assets/icon.png';

export default ({ width, click }) => {
    const elementWidth = width * 0.9;
    const imageWidth = elementWidth * 0.9;

    return (
        <Container width={width}>
            <Element 
                width={elementWidth} 
                onPress={() => click()}
            >
                <ImageContainer width={imageWidth}>
                    <Image 
                        source={Icon} 
                        width={imageWidth}
                    />
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
            </Element>
        </Container>
    )
}