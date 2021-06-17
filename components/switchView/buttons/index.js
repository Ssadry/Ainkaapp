import React from 'react';
import { Container, Button, Text, LineToButton, NotificationsPoints, Content, Line } from './styled';
import { Dimensions } from 'react-native';
import defaultColors from '../../../assets/colors/defaultColors.json';

export default ({
    width = Math.round(Dimensions.get('screen').width),
    currentState, 
    setCurrentState, 
    allTexts = ['Default'],
    notificationsPoints = [false]
}) => {
    if (notificationsPoints.length < allTexts.length)
        allTexts.forEach((i) => notificationsPoints[i] = false);
    
    const contentWidth = width * 0.9;
    const buttonWidth = contentWidth / allTexts.length;

    return (
        <Container
            width={width}
        >
            <Content
                width={contentWidth}
            >
                {
                    allTexts.map((text, i) => 
                        <Button
                            key={i}
                            onPress={_ => setCurrentState(i)}
                            width={buttonWidth}
                        >
                            <Text 
                                width={buttonWidth}
                                color={defaultColors.Lila}
                                currentState={currentState}
                                pos={i}
                            >
                                {text}
                            </Text>
                            <NotificationsPoints
                                isVisible={notificationsPoints[i]}
                                backgroundColor={defaultColors.Rojo}
                            />
                            <LineToButton
                                color={defaultColors.Lila}
                                width={buttonWidth}
                                pos={i}
                                currentState={currentState}
                            />
                        </Button>
                    )
                }
            </Content>
            <Line
                width={width} 
                color={defaultColors.GrisOscuro}
            />
        </Container>
    )
}