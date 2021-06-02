import React from 'react';
import { Container, Button, Text, BottomLine, NotificationsPoints } from './styled';
import { Dimensions } from 'react-native';

const {width} = Dimensions.get('screen');

export default ({ 
    currentState, 
    setCurrentState, 
    allTexts = ['Default'],
    notificationsPoints = [false]
}) => {
    if (notificationsPoints.length < allTexts.length)
        allTexts.forEach((i) => notificationsPoints[i] = false);
    
    const buttonWidth = width / allTexts.length * 0.7;

    return (
        <Container width={width}>
            {
                allTexts.map((text, i) => 
                    <Button
                        key={i}
                        onPress={_ => setCurrentState(i)}
                        width={buttonWidth}
                    >
                        <Text 
                            currentState={currentState}
                            pos={i}
                        >
                            {text}
                        </Text>
                        <NotificationsPoints
                            isVisible={notificationsPoints[i]}
                        />
                        <BottomLine 
                            width={buttonWidth}
                            pos={i}
                            currentState={currentState}
                        />
                    </Button>
                )
            }
        </Container>
    )
}