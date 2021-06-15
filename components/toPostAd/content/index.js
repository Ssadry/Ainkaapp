import React, {useContext} from 'react';
import {Container, Top, Bottom} from './styled';
import Button from '../button';
import { AppContext } from '../../../application/provider';

export default Content = ({navigation}) => {
    const [routeName] = useContext(AppContext);
    return (
        <Container>
            <Top>
                <Button
                    text='Necesidad'
                    click={() => navigation.navigate(routeName.editPost)}
                />
            </Top>
            <Bottom>
                <Button
                    text='Servicio'
                    click={() => navigation.navigate(routeName.editProfile)}
                />
            </Bottom>
        </Container>
    )
}