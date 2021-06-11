import React from 'react';
import {Container, PhotoContainer, Photo, Info, Title, Paraph, NotificationPoint} from './styled';
import Icon from '../../../assets/icon.png';

export default Item = ({
    width = 200,
    title = 'Title',
    paraph = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    isNew = false,
    click = () => alert('click')
}) => {
    const photoContainerWidth = width * 0.3;
    return (
        <Container
            width={width}
            onPress={click}
        >
            <PhotoContainer
                width={photoContainerWidth}
            >
                <Photo 
                    source={Icon}
                    resizeMode='stretch'
                />
            </PhotoContainer>
            <Info>
                <Title
                    numberOfLines={1}
                >
                    {title}
                </Title>
                <Paraph
                    numberOfLines={2}
                >
                    {paraph}
                </Paraph>
            </Info>
            <NotificationPoint
                isNew={isNew}
            />
        </Container>
    )
}