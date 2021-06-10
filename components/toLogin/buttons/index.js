import React, {useContext} from 'react';
import {Container, SlimButtons} from './styled';
import FatButton from '../../form/button/fat';
import SlimButton from '../../form/button/slim';
import {AppContext} from '../../../application/provider';
import {login, getServiceById} from '../../../services';

export default Content = ({
    navigation,
    emailIsCorrect = false, 
    passwordIsCorrect = false,
    email = 'loquesea@gmail.com',
    password = 'password'
}) => {
    const [routeName] = useContext(AppContext);
    const canGoToHome = emailIsCorrect && passwordIsCorrect;

    // getServiceById(26)
    //     .then((res) => {
    //         console.log(res.data);
    //     })
    //     .catch(err => alert(`ERROR: ${err}`));

    return (
        <Container>
            <FatButton
                disabled={!canGoToHome}
                click={() => {
                    if (canGoToHome) {
                        const params = new URLSearchParams();
                        params.append('Google', 0);
                        params.append('EmailUser', email);
                        params.append('PassUser', password);

                        login(params)
                            .then(({data}) => {   
                                if (data.length === 1) alert(data[0].Message);
                                else navigation.navigate(routeName.bottomNavigation);
                            })
                            .catch(err => alert(`ERROR: ${err}`));
                    };
                }}
            >
                INICIAR SESIÓN
            </FatButton>
            <SlimButtons>
                <SlimButton
                    click={() => alert('Habértela apuntado')}
                    disabled={true}
                >
                    ¿Olvidaste la contraseña?
                </SlimButton>
                <SlimButton
                    click={() => navigation.navigate(routeName.checkIn)}
                >
                    Únete a la comunidad AINKAA
                </SlimButton>
            </SlimButtons>
        </Container>
    )
}