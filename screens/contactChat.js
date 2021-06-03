import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/toContactChat/header';
import Messages from '../components/toContactChat/messages';
import Send from '../components/toContactChat/send';

export default ContactChat = () => {
    const [messages, setMessages] = React.useState([
        'Este es el primer mensaje',
        'Segundo mensaje',
        'Hey',
        'Ñe',
        'Tengo hambre'
    ]);
    const scrollViewRef = React.useRef();

    return (
        <Container>
            <Header/>
            <Messages
                messages={messages}
                scrollViewRef={scrollViewRef}
            />
            <Send
                click={() => setMessages([...messages, `Entry ${messages.length}`])}
                scrollToEnd={() => scrollViewRef.current.scrollToEnd({animated: false})}
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;