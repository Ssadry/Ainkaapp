import React from 'react';
import {Container, Element, PhotoContainer, Photo, TitleAndHours, Description, Title, Hours} from './styled';
import Icon from '../../../../../assets/icon.png';

export default ({width}) => {
    const elementWidth = width * 0.9;

    return (
        <Container width={width}>
            <Element width={elementWidth}>
                <PhotoContainer width={elementWidth}>
                    <Photo source={Icon}/>
                </PhotoContainer>
                <TitleAndHours>
                    <Title numberOfLines={1}>
                        Título del servicio
                    </Title>
                    <Hours>
                        1h
                    </Hours>
                </TitleAndHours>
                <Description numberOfLines={2}>
                    Esto es una descripción de más de 1 línea para comprobar si se corta el texto.
                </Description>
            </Element>
        </Container>
    )
}