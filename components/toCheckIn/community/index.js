import React from 'react';
import {Container, Title, Paraph, ButtonContainer, TextContainer} from './styled';
import FatButton from '../../form/button/fat';

export default ({changePage}) => {
    return (
        <Container>
            <TextContainer>
                <Title>
                    Principios de la comunidad Ainkaa
                </Title>
                <Paraph>

                </Paraph>
            </TextContainer>
            <ButtonContainer>
                <FatButton
                    click={() => changePage()}
                >
                    COMENZAR
                </FatButton>
            </ButtonContainer>
        </Container>
    );
};