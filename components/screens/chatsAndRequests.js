import React, { useState } from 'react';
import styled from 'styled-components/native';
import Header from '../toChatsAndRequests/header';
import SwitchButtons from '../switchView/buttons';

export default () => {
    const [currentState, setCurrentState] = useState(0);

    return (
        <Container>
            <Header />
            <SwitchButtons
                currentState={currentState}
                setCurrentState={setCurrentState}
                leftText={'Tus chats'}
                rightText={'Te solicitan'}
            />
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
    background-color: cyan;
`;