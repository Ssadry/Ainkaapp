import React from 'react';
import { Container, SubContainer, NameScreen } from './styled';
import GoToBackButton from '../../goToBackButton';

export default () => {
    return (
        <Container>
            <SubContainer>
                <GoToBackButton/>
                <NameScreen>
                    Tu bandeja
                </NameScreen>
            </SubContainer>
        </Container>
    )
}