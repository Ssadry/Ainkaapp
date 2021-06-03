import React from 'react';
import {Container, Content} from './styled';
import Message from './message';
import {ScrollView} from 'react-native';

export default Messages = ({messages, scrollViewRef}) => {
    return (
        <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: true}) }
        >
            <Container>
                {
                    messages.map((message, i) => 
                        <Message
                            key={i}
                        >
                            {message}
                        </Message>
                    )
                }
            </Container>
        </ScrollView>
    )
}