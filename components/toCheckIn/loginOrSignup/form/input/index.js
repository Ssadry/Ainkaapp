import React from 'react';
import {Container, Title, TextInput} from './styled';

const Input = ({title, placeHolder, onChange, value}) => {
    const [widthContainer, setWidthContainer] = React.useState(0);

    return (
        <Container onLayout={
            ({nativeEvent}) => {
                const {width} = nativeEvent.layout;
                setWidthContainer(width);
            }
        }>
            <Title>
                {title}
            </Title>
            <TextInput
                onChangeText={onChange}
                value={value}
                placeholder={placeHolder}
                width={widthContainer}
            />
        </Container>
    )
}

export default Input;