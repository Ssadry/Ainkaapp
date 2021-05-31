import React from 'react';
import {Container, Line} from './styled';
import Button from './button';

export default ({width, navigation, setPopUpIsVisible}) => {
    const buttonWidth = width * 0.5 - 1;

    return (
        <Container width={width}>
            <Button 
                width={buttonWidth}
                click={() => navigation.navigate('Chat')}
            >
                Aceptar
            </Button>
            <Line/>
            <Button 
                width={buttonWidth}
                click={() => setPopUpIsVisible(true)}
            >
                Rechazar
            </Button>
        </Container>
    )
}