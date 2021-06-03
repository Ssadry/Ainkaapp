import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/toInbox/header';
import Content from '../components/toInbox/content';
import SwitchView from '../components/switchView/buttons';

export default Inbox = () => {
    const [currentState, setCurrentState] = React.useState(0);

    return (
        <Container>
            <Header/>
            <SwitchView
                currentState={currentState}
                setCurrentState={setCurrentState}
                allTexts={['Chats', 'Solicitudes', 'Contactos']}
                notificationsPoints={[true, true, false]}
            />
            <Content
                currentState={currentState}
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
`;