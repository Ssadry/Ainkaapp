import React from 'react';
import {Container, Top, Bottom} from './styled';
import Button from '../button';

export default Content = ({navigation}) => {
    return (
        <Container>
            <Top>
                <Button
                    text='Necesidad'
                    navigation={navigation}
                />
            </Top>
            <Bottom>
                <Button
                    text='Servicio'
                    navigation={navigation}
                />
            </Bottom>
        </Container>
    )
}