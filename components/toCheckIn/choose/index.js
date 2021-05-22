import React from 'react';
import {Container, Title, Button, ButtonTitle, ButtonDescription, NextButton, NextText} from './styled';

const data = [
    {
        title: 'Freemium',
        description: 'No pagas nada'
    },
    {
        title: 'Premium',
        description: '4.99 x mes'
    },
    {
        title: 'Premium +',
        description: '9.99 x mes'
    }
]

const buttons = [];
for (let i = 0; i < data.length; i++) 
    buttons[i] = <Button key={i}>
                    <ButtonTitle>
                        {data[i].title}
                    </ButtonTitle>
                    <ButtonDescription>
                        {data[i].description}
                    </ButtonDescription>
                </Button>

export default Choose = ({setCurrentPos}) => {
    return (
        <Container>
            <Title>
                ¡Elige tu membresía!
            </Title>
            {
                buttons.map(button => button)
            }
            <NextButton onPress={() => setCurrentPos(-100)}>
                <NextText>
                    Siguiente
                </NextText>
            </NextButton>
        </Container>
    )
}

