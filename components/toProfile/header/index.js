import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    Header, 
    User, 
    Photo, 
    Settings, 
    Starts, 
    Personal, 
    Share, 
    Name, 
    Info, 
    Icons, 
    Amount,
    Details,
    Content,
    Icon,
    Text,
    Counter,
    PulledApart,
    PulledApartNumber,
    PulledApartText
} from './styled';
import { 
    faShareAlt, 
    faEllipsisH, 
    faUserCircle, 
    faStar,
    faChartBar,
    faMapMarkerAlt,
    faGlobe
} from '@fortawesome/free-solid-svg-icons'

export default ({width}) => {
    return (
        <Header width={width}>
            <Icons>
                <Settings>
                    <FontAwesomeIcon icon={faEllipsisH} size="30px"/>
                </Settings>
                <Share>
                    <FontAwesomeIcon icon={faShareAlt} size="30px"/>
                </Share>
            </Icons>
            <User>
                <Info>
                    <Personal>
                        <Name>
                            Andry Alexis Reyes Cruz
                        </Name>
                        <Starts>
                            <FontAwesomeIcon icon={faStar} size="20px"/>
                            <FontAwesomeIcon icon={faStar} size="20px"/>
                            <FontAwesomeIcon icon={faStar} size="20px"/>
                            <FontAwesomeIcon icon={faStar} size="20px"/>
                            <FontAwesomeIcon icon={faStar} size="20px"/>
                            <Amount>(0)</Amount>
                        </Starts>
                    </Personal>
                    <Photo>
                        <FontAwesomeIcon icon={faUserCircle} size="100px"/>
                    </Photo>
                </Info>
                <Details>
                        <Content>
                            <Icon>
                                <FontAwesomeIcon icon={faChartBar} size="20px"/>
                            </Icon>
                            <Text>
                                1 agregado 2 no sé qué
                            </Text>
                        </Content>
                        <Content>
                            <Icon>
                                <FontAwesomeIcon icon={faMapMarkerAlt} size="20px"/>
                            </Icon>
                            <Text>
                                Ubicación
                            </Text>
                        </Content>
                        <Content>
                            <Icon>
                                <FontAwesomeIcon icon={faGlobe} size="20px"/>
                            </Icon>
                            <Text>
                                ONLINE
                            </Text>
                        </Content>
                </Details>
            </User>
            <Counter>
                <PulledApart width={width / 3}>
                    <PulledApartNumber>
                        1
                    </PulledApartNumber>
                    <PulledApartText>
                        Servicios
                    </PulledApartText>
                </PulledApart>
                <PulledApart width={width / 3}>
                    <PulledApartNumber>
                        0
                    </PulledApartNumber>
                    <PulledApartText>
                        Reseñas
                    </PulledApartText>
                </PulledApart>
                <PulledApart width={width / 3}>
                    <PulledApartNumber>
                        +
                    </PulledApartNumber>
                    <PulledApartText>
                        INFO
                    </PulledApartText>
                </PulledApart>
            </Counter>
        </Header>
    )
}