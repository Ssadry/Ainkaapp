import React, {useContext} from 'react';
import {Container, SlimButtons} from './styled';
import FatButton from '../../form/button/fat';
import SlimButton from '../../form/button/slim';
import {AppContext} from '../../../application/provider';
import {login} from '../../../services';
import {getObjectData, storeObjectData} from '../../../application/asyncStorage';
import defaultColors from '../../../assets/colors/defaultColors.json';

export default Buttons = ({
    navigation,
    emailIsCorrect = false, 
    passwordIsCorrect = false,
    email = 'loquesea@gmail.com',
    password = 'password',
    keepSessionOpen = false
}) => {
    const [routeName] = useContext(AppContext);
    const canGoToHome = emailIsCorrect && passwordIsCorrect;

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

                        if (keepSessionOpen) {
                            const KEY = '@Account';
                            storeObjectData(KEY, {
                                email: email,
                                password: password
                            });
                        }

                        login(params)
                            .then(({data}) => {   
                                if (data.length === 1) alert(data[0].Message);
                                else navigation.navigate(routeName.bottomNavigation, {
                                    prevScreen: routeName.login
                                });
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
                    color={defaultColors.Lila}
                >
                    ¿Olvidaste la contraseña?
                </SlimButton>
                <SlimButton
                    click={() => navigation.navigate(routeName.checkIn)}
                    color={defaultColors.Lila}
                >
                    Únete a la comunidad AINKAA
                </SlimButton>
            </SlimButtons>
        </Container>
    )
}