import React from 'react';
import {
    Container, 
    Info, 
    Paraph, 
    PhotoProfileContainer, 
    Name, 
    PhotoProfile,
    Profile,
    ButtonContainer,
    ServiceName,
    TopPhoto,
    MyContent,
    Line,
    Title,
    ParaphContainer,
    Button
} from './styled';
import {Dimensions} from 'react-native';
import Icon from '../../../assets/icon.png';
import FatButton from '../../form/button/fat';
import TopSettings from '../topSettings';

const width = Math.round(Dimensions.get('screen').width);
const padding = width * 0.2;
const widthButton = width * 0.45;

export default Content = ({
    title = 'Paquita quiere contactar contigo',
    handleButton = () => alert('click'),
}) => {
    const [serviceNameHeight, setServiceNameHeight] = React.useState(0);

    return (
        <Container>
            <TopPhoto>
                <TopSettings/>
                <Line
                    width={width}
                />
            </TopPhoto>
            <MyContent
                myPadding={padding}
                serviceNameHeight={serviceNameHeight}
            >
                <Profile>
                    <ServiceName
                        onLayout={
                            ({nativeEvent}) => {
                                const {height} = nativeEvent.layout;
                                setServiceNameHeight(height);
                            }
                        }
                    >
                        Nombre del servicio
                    </ServiceName>
                    <PhotoProfileContainer>
                        <PhotoProfile 
                            resizeMode='stretch'
                            source={Icon}
                        />
                    </PhotoProfileContainer>
                    <Name>
                        Nombre
                    </Name>
                </Profile>
                <Info>
                    <Title>
                        {title}
                    </Title>
                    <ParaphContainer>
                        <Paraph>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Paraph>
                    </ParaphContainer>
                </Info>
            </MyContent>
            <ButtonContainer
                width={width}
            >
                <Button>
                    <FatButton
                        click={handleButton}
                        width={widthButton}
                    >
                        ACEPTAR
                    </FatButton>
                </Button>
                <Button>
                    <FatButton
                        click={handleButton}
                        width={widthButton}
                    >
                        RECHAZAR
                    </FatButton>
                </Button>
            </ButtonContainer>
        </Container>
    )
}