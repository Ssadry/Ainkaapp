import React from 'react';
import Icon from '../../../assets/icon.png'
import {Container, IconContainer, Image, Text} from './styled';
import defaultColors from '../../../assets/colors/defaultColors.json';
import { LogoIcon } from '../../../assets/svg/icon';

export default Button = ({
    text = 'Default',
    click = () => alert('click')
}) => {

    return (
        <Container
            backgroundColor={defaultColors.Blanco}
            onPress={click}
            style={{elevation: 2}}
        >
            <IconContainer>
                <LogoIcon
                    size={'100%'}
                />
            </IconContainer>
            <Text>
                {text}
            </Text>
        </Container>
    )
}