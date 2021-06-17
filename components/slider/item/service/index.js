import React from 'react';
import { Container, Content, IconContainer, Title } from './styled';

export default Service = ({
    width = 200,
    title = 'Title',
    icon = Icon
}) => {
    const contentWidth = width * 0.8;
    const imagenContainerWidth = contentWidth * 0.5;
    const borderRadiusContent = imagenContainerWidth * 0.7;

    return (
        <Container 
            width={width}
        >
            <Content 
                width={contentWidth}
                borderRadius={borderRadiusContent}
            >
                <IconContainer>
                    {icon}
                </IconContainer>
                <Title
                    numberOfLines={1}
                >
                    {title}
                </Title>
            </Content>
        </Container>
    )
}