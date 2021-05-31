import React from 'react';
import {Header, Top, TopLeft, Image, Text, Hours, Title, Icons, User, Settings, Bottom, Button, ButtonText, GoToBackButtonContainer} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../../assets/icon.png';
import GoToBackButton from '../../goToBackButton';

export default ({width, navigation}) => {
    const buttonWidth = width / 3;

    return (
        <Header>
            <Top>
                <TopLeft>
                    <GoToBackButtonContainer>
                        <GoToBackButton navigation={navigation} />
                    </GoToBackButtonContainer>
                    <Image source={Icon} resizeMode='stretch'/>
                    <Text>
                        <Hours>
                            1 H
                        </Hours>
                        <Title>
                            Título
                        </Title>
                    </Text>
                </TopLeft>
                <Icons>
                    <User>
                        <FontAwesomeIcon icon={faUserCircle} size={60}/>
                    </User>
                    <Settings>
                        <FontAwesomeIcon icon={faEllipsisV} size={30}/>
                    </Settings>
                </Icons>
            </Top>
            <Bottom>
                <Button width={buttonWidth}>
                    <ButtonText>
                        Canjear horas
                    </ButtonText>
                </Button>
                <Button width={buttonWidth}>
                    <ButtonText>
                        Negociación libre
                    </ButtonText>
                </Button>
                <Button width={buttonWidth}>
                    <ButtonText>
                        Ya no me interesa
                    </ButtonText>
                </Button>
            </Bottom>
        </Header>
    )
}
