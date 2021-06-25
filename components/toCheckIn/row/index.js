import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import {Container, ImageBackground, TextImage, TextContainer, Paraph, Title} from './styled';

export default Row = ({
    textImage = '0',
    image = Logo,
    title = 'Title',
    paraph = 'Paraph',
    pos = 'n'
}) => {
    const [textContainerWidth, setTextContainerWidth] = useState(0);

    return (
        <Container
            pos={pos}
        >
            <ImageBackground
                source={image}
                resizeMode={'stretch'}
            >
                <TextImage>
                    {textImage}
                </TextImage>
            </ImageBackground>
            <TextContainer
                onLayout={
                    ({nativeEvent}) => {
                        const {width} = nativeEvent.layout;
                        setTextContainerWidth(width);
                    }
                }
            >
                <Title
                    width={textContainerWidth}
                    numberOfLines={3}
                    adjustsFontSizeToFit
                    pos={pos}
                >
                    {title}
                </Title>
                <Paraph
                    numberOfLines={6}
                    adjustsFontSizeToFit
                    pos={pos}
                >
                    {paraph}
                </Paraph>
            </TextContainer>
        </Container>
    )
}