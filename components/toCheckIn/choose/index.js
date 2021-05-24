import React from 'react';
import {
    Container, 
    Title, 
    Button, 
    ButtonTitle, 
    ButtonDescription, 
    NextButton, 
    NextText
} from './styled';

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

export default Choose = ({setCurrentPos, currentPos}) => {
    const [widthContainer, setWidthContainer] = React.useState(0);

    return (
        <Container onLayout={
            ({nativeEvent}) => {
                const {width} = nativeEvent.layout;
                setWidthContainer(width);
            }
        }        
        >
            <Title>
                ¡Elige tu membresía!
            </Title>
            {
                buttons.map(button => button)
            }
            <NextButton onPress={() => setCurrentPos(currentPos - widthContainer)}>
                <NextText>
                    Siguiente
                </NextText>
            </NextButton>
        </Container>
    )
}

