import React from 'react';
import {Header, Top, TopLeft, Image, Text, Hours, Title, Icons, User, Settings, Bottom, Button, ButtonText} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../../assets/icon.png';

export default ({width}) => {
    return (
        <Header>
            <Top>
                <TopLeft>
                    <Image source={Icon} style={{resizeMode: 'stretch'}}/>
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
                        <FontAwesomeIcon icon={faUserCircle} size="60px"/>
                    </User>
                    <Settings>
                        <FontAwesomeIcon icon={faEllipsisV} size="30px"/>
                    </Settings>
                </Icons>
            </Top>
            <Bottom>
                <Button width={width / 3}>
                    <ButtonText>
                        Canjear horas
                    </ButtonText>
                </Button>
                <Button width={width / 3}>
                    <ButtonText>
                        Negociación libre
                    </ButtonText>
                </Button>
                <Button width={width / 3}>
                    <ButtonText>
                        Ya no me interesa
                    </ButtonText>
                </Button>
            </Bottom>
        </Header>
    )
}
