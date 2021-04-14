import React from 'react';
import { Button, Text } from './styled';

export default ({ children }) => {
    return (
        <Button>
            <Text>
                {children}
            </Text>
        </Button>
    )
}