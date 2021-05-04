import React, { useState } from 'react';
import styled from 'styled-components/native';
import Header from '../toChatsAndRequests/header';
import SwitchButtons from '../switchView/buttons';
import Description from '../toChatsAndRequests/description';
import Content from '../toChatsAndRequests/content';

export default ({navigation}) => {
    const [currentState, setCurrentState] = useState(0);
    const chatDescription = 'Consulta tus chats...';
    const requestDescription = 'Alguien quiere contactar contigo...';

    return (
        <Container>
            <Header navigation={navigation}/>
            <SwitchButtons
                currentState={currentState}
                setCurrentState={setCurrentState}
                leftText={'Tus chats'}
                rightText={'Te solicitan'}
            />
            <Description>
                {currentState == 0 ? chatDescription : requestDescription}
            </Description>
            <Content 
                currentState={currentState} 
                navigation={navigation}
            />
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`;