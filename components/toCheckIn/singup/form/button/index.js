import React from 'react';
import {Container, Text} from './styled';

export default Button = ({children, click}) => {
    return (
        <Container
            onPress={
                () => {
                    click(1);
                }
            }
        >
            <Text>
                {children}
            </Text>
        </Container>
    )
}