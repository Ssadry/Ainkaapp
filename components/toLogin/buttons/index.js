import React, {useContext} from 'react';
import {Container, SlimButtons} from './styled';
import FatButton from '../../form/button/fat';
import SlimButton from '../../form/button/slim';
import {AppContext} from '../../../application/provider';
import {post} from '../../../services';
// import firebase, {db} from '../../../application/firebase';

export default Content = ({
    navigation,
    emailIsCorrect = false, 
    passwordIsCorrect = false,
    email = 'loquesea@gmail.com',
    password = 'password'
}) => {
    const [routeName] = useContext(AppContext);
    
    return (
        <Container>
            <FatButton
                click={() => {
                    // const canGoToHome = emailIsCorrect && passwordIsCorrect;
                    // if (canGoToHome) {
                    //     // const user = async() => await db.collection('users').add({
                    //     //     email: email,
                    //     //     password: password
                    //     // });
                    //     // // const firebaseId = user.id;

                    //     // navigation.navigate(routeName.bottomNavigation);
                    //     const params = new URLSearchParams();
                    //     params.append('Google', 0);
                    //     params.append('EmailUser', email);
                    //     params.append('PassUser', password);
    
                    //     post('https://pablomonteserin.com/sites/ainkaa/index.php/users/login', params);
                    //     navigation.navigate(routeName.bottomNavigation);
                    // }
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
                        navigation.navigate(routeName.checkIn)
                    }}
                >
                    Únete a la comunidad AINKAA
                </SlimButton>
            </SlimButtons>
        </Container>
    )
}