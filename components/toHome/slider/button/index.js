import React from 'react';
import { Button, Text } from './styled';

export default ({ children, handlePress }) => {
    return (
        <Button onPress={() => handlePress()} underlayColor="#DDDDDD" >
            <Text>{children}</Text>
        </Button >
    )
}