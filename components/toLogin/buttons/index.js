import React from 'react';
import {Container, SlimButtons} from './styled';
import FatButton from '../../form/button/fat';
import SlimButton from '../../form/button/slim';
import {AppContext} from '../../../application/provider';

export default Content = ({
    navigation,
    emailIsCorrect = false, 
    passwordIsCorrect = false,
}) => {
    const [routeName] = React.useContext(AppContext);

    return (
        <Container>
            <FatButton
                click={() => {
                    const canGoToHome = emailIsCorrect && passwordIsCorrect;
                    if (canGoToHome) 
                        navigation.navigate(routeName.bottomNavigation);
                }}
            >
                INICIAR SESIÓN
            </FatButton>
            <SlimButtons>
                <SlimButton
                    click={() => alert('Habértela apuntado')}
                >
                    ¿Olvidaste la contraseña?
                </SlimButton>
                <SlimButton
                    click={() => {

                    }}
                >
                    Únete a la comunidad AINKAA
                </SlimButton>
            </SlimButtons>
        </Container>
    )
}