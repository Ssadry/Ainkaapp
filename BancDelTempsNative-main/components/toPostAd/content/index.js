import React from 'react';
import {Container, Top, Bottom} from './styled';
import Button from '../button';

export default Content = () => {
    return (
        <Container>
            <Top>
                <Button
                    text='Necesidad'
                />
            </Top>
            <Bottom>
                <Button
                    text='Servicio'
                />
            </Bottom>
        </Container>
    )
}