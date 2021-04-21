import React from 'react';
import { Container, Button, Text } from './styled';

export default ({ currentState, setCurrentState, leftText, rightText }) => {
    return (
        <Container>
            <Button
                onPress={() => setCurrentState(0)}
                currentState={currentState}
                pos={0}
            >
                <Text>
                    {leftText}
                </Text>
            </Button>
            <Button
                onPress={() => setCurrentState(1)}
                currentState={currentState}
                pos={1}
            >
                <Text>
                    {rightText}
                </Text>
            </Button>
        </Container>
    )
}