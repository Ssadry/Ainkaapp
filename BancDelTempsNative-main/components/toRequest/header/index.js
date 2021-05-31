import React from 'react';
import {Container, GoToBackButtonContainer, PhotoContainer, Photo, TextContainer, Name, StarsContainer, Location, SettingsContainer, Left} from './styled';
import GoToBackButton from '../../goToBackButton';
import Icon from '../../../assets/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

export default ({navigation}) => {
    return (
        <Container>
            <Left>
                <GoToBackButtonContainer>
                    <GoToBackButton navigation={navigation}/>
                </GoToBackButtonContainer>
                <PhotoContainer>
                    <Photo source={Icon}/>
                </PhotoContainer>
                <TextContainer>
                    <Name>
                        Nombre usuario
                    </Name>
                    <StarsContainer>
                        <FontAwesomeIcon icon={faStar} size={20}/>
                        <FontAwesomeIcon icon={faStar} size={20}/>
                        <FontAwesomeIcon icon={faStar} size={20}/>
                        <FontAwesomeIcon icon={faStar} size={20}/>
                        <FontAwesomeIcon icon={faStar} size={20}/>
                    </StarsContainer>
                    <Location>
                        Ubicación
                    </Location>
                </TextContainer>
            </Left>
            <SettingsContainer>
                <FontAwesomeIcon icon={faEllipsisV} size={30}/>
            </SettingsContainer>
        </Container>
    )
}