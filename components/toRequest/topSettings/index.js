import React from 'react';
import {Container, IconsContainer, Icon} from './styled';
import GoToBackButton from '../../goToBackButton';
import Hours from '../../hours';

export default TopSettings = ({navigation}) => {
    return (
        <Container>
            <GoToBackButton
                navigation={navigation}
            />
            <IconsContainer
                onPress={() => alert('Todavía no sé qué debe hacer este botón.')}
            >
                <Icon>
                    <Hours
                        width={30}
                    >
                        2h
                    </Hours>
                </Icon>
            </IconsContainer>
        </Container>
    )
}