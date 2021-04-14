import React from 'react';
import {Container} from './styled';
import {Text} from 'react-native';

export default ({width, children, currentState, click}) => {
    return (
        <Container width={width} 
                    currentState={currentState} 
                    onPress={() => click(children)}
                    name={children}>
            <Text>
                {children}
            </Text>
        </Container>
    )
}