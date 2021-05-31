import React from 'react';
import {Container, Background, Content, Question, Button, ButtonText, ButtonContainer, Line} from './styled';

export default ({isVisible, setPopUpIsVisible, userPromisesMe}) => {
    return (
        <Container isVisible={isVisible}>
            <Background onPress={() => setPopUpIsVisible(false)}/>
            <Content>
                <Question>
                    ¿Me lo prometes?
                </Question>
                <ButtonContainer>
                    <Button onPress={() => userPromisesMe()}>
                        <ButtonText>
                            shi
                        </ButtonText>
                    </Button>
                    <Line/>
                    <Button onPress={() => setPopUpIsVisible(false)}>
                        <ButtonText>
                            No
                        </ButtonText>
                    </Button>
                </ButtonContainer>
            </Content>
        </Container>
    )
}