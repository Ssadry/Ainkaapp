import React from 'react';
import { Container, SubContainer, NameScreen } from './styled';
import GoToBackButton from '../../goToBackButton';

export default ({navigation}) => {
    return (
        <Container>
            <SubContainer>
                <GoToBackButton navigation={navigation}/>
                <NameScreen>
                    Tu bandeja
                </NameScreen>
            </SubContainer>
        </Container>
    )
}