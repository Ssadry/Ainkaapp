import React from 'react';
import {Container, Element, Photo, TitleAndHours, Description, Title, Hours} from './styled';
import Icon from '../../../../../assets/icon.png';

export default () => {
    return (
        <Container>
            <Element>
                <Photo source={Icon}/>
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