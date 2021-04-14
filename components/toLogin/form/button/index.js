import React from 'react';
import { Button, Text } from './styled';

export default ({ children, click }) => {
    return (
        <Button onPress={() => click()}>
            <Text>
                {children}
            </Text>
        </Button>
    )
}