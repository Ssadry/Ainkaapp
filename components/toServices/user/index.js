import React from 'react';
import {User, Photo, Name, Stars, Location, Icon, Text, Info} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faStar, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <User>
            <Photo>
                <FontAwesomeIcon icon={faUserCircle} size="100px"/>
            </Photo>
            <Info>
                <Name>
                    Andry Alexis Reyes Cruz
                </Name>
                <Stars>
                    <FontAwesomeIcon icon={faStar} size="20px"/>
                    <FontAwesomeIcon icon={faStar} size="20px"/>
                    <FontAwesomeIcon icon={faStar} size="20px"/>
                    <FontAwesomeIcon icon={faStar} size="20px"/>
                    <FontAwesomeIcon icon={faStar} size="20px"/>
                </Stars>
                <Location>
                    <Icon>
                        <FontAwesomeIcon icon={faMapMarkedAlt} size="20px"/>
                    </Icon>
                    <Text>
                        UBICACIÓN
                    </Text>
                </Location>
            </Info>
        </User>
    )
}