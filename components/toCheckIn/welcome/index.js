import React, {useState} from 'react';
import {Container, Title, Subtitle, ButtonContainer, TextContainer, SubtitleContainer, Content} from './styled';
import FatButton from '../../form/button/fat';
import Row from '../row';
import NavyPatch from '../../../assets/images/AinkaaPatch/NavyPatch.png';
import PurplePatch from '../../../assets/images/AinkaaPatch/PurplePatch.png';
import GreenPatch from '../../../assets/images/AinkaaPatch/GreenPatch.png';
import { ScrollView } from 'react-native';

export default ({changePage}) => {
    const [titleWidth, setTitleWidth] = useState(0);

    return (
        <Container>
            <TextContainer>
                <Title
                    onLayout={
                        ({nativeEvent}) => {
                            const {width} = nativeEvent.layout;
                            setTitleWidth(Math.round(width * 0.7));
                        }
                    }
                    numberOfLines={2}
                    adjustsFontSizeToFit
                >
                    ¡Te damos la bienvenida a Ainkaa!
                </Title>
                <Subtitle
                    numberOfLines={2}
                    adjustsFontSizeToFit
                >
                    Estos son nuestros principios
                </Subtitle>
            </TextContainer>
            <ScrollView>
                <Content>
                    <Row
                        textImage={1}
                        image={NavyPatch}
                        title={'Si caminamos juntos, llegamos más lejos.'}
                        paraph={'Cuando las arañas se unen, pueden atar incluso a un león.'}
                    />
                    <Row
                        textImage={2}
                        image={PurplePatch}
                        title={'Todos sabemos algo que puede servirle a alguien más.'}
                        paraph={'El conocimiento no es de quien lo quiere, sino de quien lo necesita.'}
                        pos={'r'}
                    />
                    <Row
                        textImage={3}
                        image={GreenPatch}
                        title={'Disfrutamos y respetamos nuestra diversidad.'}
                        paraph={'En ainkaa no hay puntos de vista malos, solo diferentes.'}
                    />
                </Content>
            </ScrollView>
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