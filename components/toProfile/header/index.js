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
    PulledApartText,
    LeftIcons,
    RightIcons
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
import GoToBackButton from '../../goToBackButton';

export default ({width, navigation}) => {
    return (
        <Header width={width}>
            <Icons>
                <LeftIcons>
                    <GoToBackButton navigation={navigation}/>
                </LeftIcons>
                <RightIcons>
                    <Settings>
                        <FontAwesomeIcon icon={faEllipsisH} size={30}/>
                    </Settings>
                    <Share>
                        <FontAwesomeIcon icon={faShareAlt} size={30}/>
                    </Share>
                </RightIcons>
            </Icons>
            <User>
                <Info>
                    <Personal>
                        <Name>
                            Andry Alexis Reyes Cruz
                        </Name>
                        <Starts>
                            <FontAwesomeIcon icon={faStar} size={20}/>
                            <FontAwesomeIcon icon={faStar} size={20}/>
                            <FontAwesomeIcon icon={faStar} size={20}/>
                            <FontAwesomeIcon icon={faStar} size={20}/>
                            <FontAwesomeIcon icon={faStar} size={20}/>
                            <Amount>(0)</Amount>
                        </Starts>
                    </Personal>
                    <Photo>
                        <FontAwesomeIcon icon={faUserCircle} size={100}/>
                    </Photo>
                </Info>
                <Details>
                        <Content>
                            <Icon>
                                <FontAwesomeIcon icon={faChartBar} size={20}/>
                            </Icon>
                            <Text>
                                1 agregado 2 no sé qué
                            </Text>
                        </Content>
                        <Content>
                            <Icon>
                                <FontAwesomeIcon icon={faMapMarkerAlt} size={20}/>
                            </Icon>
                            <Text>
                                Ubicación
                            </Text>
                        </Content>
                        <Content>
                            <Icon>
                                <FontAwesomeIcon icon={faGlobe} size={20}/>
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