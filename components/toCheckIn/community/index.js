import React from 'react';
import {Container, Title, Paraph, ButtonContainer, TextContainer} from './styled';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import QuicksandRegular from '../../../assets/fonts/Quicksand-Regular.ttf';
import FatButton from '../../form/button/fat';

export default ({changePage}) => {
    const [fontsLoaded] = useFonts({'QuicksandRegular': QuicksandRegular});

    return !fontsLoaded ? <AppLoading/> : 
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
}