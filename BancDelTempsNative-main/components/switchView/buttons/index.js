import React from 'react';
import { Container, Button, Text, BottomLine } from './styled';
import { Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

export default ({ currentState, setCurrentState, allTexts }) => {    
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