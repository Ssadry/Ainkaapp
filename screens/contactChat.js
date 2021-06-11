import React, {useState, useRef} from 'react';
import styled from 'styled-components/native';
import Header from '../components/toContactChat/header';
import Messages from '../components/toContactChat/messages';
import Send from '../components/toContactChat/send';

const ContactChat = () => {
    const [messages, setMessages] = useState(['a', 'v']);
    const scrollViewRef = useRef();

    return (
        <Container>
            <Header/>
            <Messages
                messages={messages}
                scrollViewRef={scrollViewRef}
            />
            <Send
                click={() => setMessages([...messages, `Entry ${messages.length}`])}
                scrollToEnd={() => scrollViewRef.current.scrollToEnd({animated: true})}
            />
        </Container>
    );
};

export default ContactChat;

const Container = styled.View`
    flex: 1;
`;