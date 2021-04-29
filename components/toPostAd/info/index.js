import React from 'react';
import {
    Container, 
    Top, 
    Bottom, 
    Image, 
    BasicInfoContainer, 
    TopBasicInfo, 
    BottomBasicInfo,
    Title,
    Location,
    Hours,
    IconsContainer,
    Description
} from './styled';
import Icon from '../../../assets/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser, faGlobe } from '@fortawesome/free-solid-svg-icons'

export default () => {
    return (
        <Container>
            <Top>
                <Image source={Icon}/>
            </Top>
            <Bottom>
                <BasicInfoContainer>
                    <TopBasicInfo>
                        <Title>
                            Título del servicio
                        </Title>
                        <Hours>
                            1h
                        </Hours>
                    </TopBasicInfo>
                    <BottomBasicInfo>
                        <Location>
                            Ubicación
                        </Location>
                        <IconsContainer>
                            <FontAwesomeIcon icon={faUser} size={30}/>
                            <FontAwesomeIcon icon={faGlobe} size={30}/>
                        </IconsContainer>
                    </BottomBasicInfo>
                    <Description>
                        Esta es una descripción hecha por el programador frontend. Como no saber qué poner, empieza a escribir cualquier cosa para rellenar.
                        Vamoh a veh, que más puedo poner aquí. Solo estoy probando si esto se descuadra o no si hay más o menos texto.
                    </Description>
                </BasicInfoContainer>
            </Bottom>
        </Container>
    )
}