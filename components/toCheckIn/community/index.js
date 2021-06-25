import React from 'react';
import {Container, Title, ButtonContainer, Content} from './styled';
import FatButton from '../../form/button/fat';
import {ScrollView} from 'react-native';
import Row from '../row';
import PurplePatch from '../../../assets/images/AinkaaPatch/PurplePatch.png';
import GreenPatch from '../../../assets/images/AinkaaPatch/GreenPatch.png';
import NavyPatch from '../../../assets/images/AinkaaPatch/NavyPatch.png';

export default ({changePage}) => {
    return (
        <Container>
            <Title>
                ¿Qué puedes hacer en Ainkaa?
            </Title>
            <ScrollView>
                <Content>
                    <Row
                        textImage={''}
                        image={GreenPatch}
                        title={'Publica un servicio o una necesidad.'}
                        paraph={'Para ganar horas o para encontrar a alguien que pueda ayudarte.'}
                    />
                    <Row
                        textImage={''}
                        image={NavyPatch}
                        title={'Intercambia horas.'}
                        paraph={'Gana una hora por cada servicio que hagas, y después intercámbialas con algo que quieras o necesites.'}
                        pos={'r'}
                    />
                    <Row
                        textImage={''}
                        image={PurplePatch}
                        title={'Haz un intercambio libre.'}
                        paraph={'Si no quieres intercambiar horas, haz un intercambio libre. ¡El valor lo pones tú!.'}
                    />
                </Content>
            </ScrollView>
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