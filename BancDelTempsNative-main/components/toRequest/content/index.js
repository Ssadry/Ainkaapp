import React, {useState} from 'react';
import {Container, Info, InfoText, Message, MessageText, MessageContainer, Line, ScrollView} from './styled';

export default () => {
    const [messageContainerHeight, setMessageContainerHeight] = useState(0);

    return (
            <Container>
                <Info>
                    <InfoText>
                        "Andry" quiere contactar contigo para solicitar una clase de 'dar sentido a la vida'.
                    </InfoText>
                    <Line/>
                </Info>
                <ScrollView onLayout={
                    (event) => {
                        const {height} = event.nativeEvent.layout;
                        setMessageContainerHeight(height);
                    }
                }
                >
                    <MessageContainer height={messageContainerHeight}>
                        <Message>
                            <MessageText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor ipsum quis augue maximus mattis. Proin sodales risus in ante rutrum, sed scelerisque justo placerat. Suspendisse potenti. Nam euismod massa non eros vestibulum malesuada. Suspendisse et tortor neque. Pellentesque dictum vehicula nisl, facilisis semper libero congue nec. Vivamus cursus purus ac arcu pretium, quis efficitur ex blandit. Pellentesque fringilla nisl malesuada est rutrum gravida. Sed aliquet hendrerit euismod. Nulla facilisi. 
                            </MessageText>
                        </Message>
                    </MessageContainer>
                </ScrollView>
            </Container>
    )
}