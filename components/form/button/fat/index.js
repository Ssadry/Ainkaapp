import React from 'react';
import {Container, Text} from './styled';
import defaultColors from '../../../../assets/colors/defaultColors.json';

export default Button = ({
    children = 'Button',
    click = () => alert('click'),
    backgroundColor = defaultColors.Verde,
    color = defaultColors.AzulOscuro,
    width = 250,
    disabled = false,
    fontSize = 20
}) => <Container
    onPress={click}
    color={backgroundColor}
    width={width}
    disabled={disabled}
>
    <Text
        color={color}
        fontSize={fontSize}
    >
        {children}
    </Text>
</Container>
