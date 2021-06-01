import React from 'react';
import {Container, Top, TopLeft, TopRight, Middle, Bottom, Title, Location} from './styled';
import {Dimensions} from 'react-native';

const padding = Dimensions.get('screen').width * 0.2;

export default Content = () => {
    return (
        <Container
            myPadding={padding}
        >
            <Top>
                <TopLeft>
                    <Title>
                        Título
                    </Title>
                    <Location>
                        Ubicación
                    </Location>
                </TopLeft>
                <TopRight>

                </TopRight>
            </Top>
            <Middle>

            </Middle>
            <Bottom>

            </Bottom>
        </Container>
    )
}