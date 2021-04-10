import React from 'react';
import { Petition, Text, Button } from './styled';

export default () => {
    return (
        <Petition>
            <Button onPress={() => alert("ñe")}>
                <Text>
                    SOLICITAR
                </Text>
            </Button>
        </Petition>
    )
}