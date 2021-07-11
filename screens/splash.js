import React, {useContext, useEffect} from 'react';
import styled from 'styled-components/native';
import {AppContext} from '../application/provider';
import {getObjectData} from '../application/asyncStorage';
import {LogoIcon} from '../assets/svg/icon';
import {logIn} from '../services';

const TIME_GO_NEXT_SCREEN = 2000;

const Splash = ({navigation}) => {
    const [routeName] = useContext(AppContext);

    useEffect(() => {
        const KEY = '@Account';
        getObjectData(KEY)
            .then(account => {
                setTimeout(_ => {
                    if (account === null) {
                        navigation.navigate(routeName.login, {
                            prevScreen: routeName.splash
                        });
                    } else {
                        logIn(account.email, account.password)
                            .then(_ => {
                                navigation.navigate(routeName.bottomNavigation, {
                                    prevScreen: routeName.splash
                                });
                            })
                            .catch(err => alert(err));
                    }
                }, TIME_GO_NEXT_SCREEN);
            });
    });

    return (
        <Container>
            <LogoIcon 
                size={150}
            />
        </Container>
    );
};

export default Splash;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #F3F2F3;
`;