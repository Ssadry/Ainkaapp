import React from 'react';
import {Container, ScrollView} from './styled';

export default ({children}) => {
    return (
        <ScrollView>
            <Container>
                {
                    children.map(child => child)
                }
            </Container>
        </ScrollView>
    )
}