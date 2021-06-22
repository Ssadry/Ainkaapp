import React from 'react';
import {Container, Title, Paraph, ButtonContainer, TextContainer} from './styled';
import FatButton from '../../form/button/fat';

export default ({changePage}) => {
    return (
        <Container>
            <TextContainer>
                <Title>
                    Bienvenido a Ainkaa
                </Title>
                <Paraph>
                    Estos son nuestros principios
                </Paraph>
            </TextContainer>
            <ButtonContainer>
                <FatButton
                    click={() => changePage(1)}
                >
                    SIGUIENTE
                </FatButton>
            </ButtonContainer>
        </Container>
    );
};