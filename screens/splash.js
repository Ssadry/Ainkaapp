import React, {useContext, useEffect} from 'react';
import Icon from '../assets/icon.png';
import styled from 'styled-components/native';
import {AppContext} from '../application/provider';
import {getObjectData} from '../application/asyncStorage';
import {login} from '../services';

const Splash = ({navigation}) => {
    const [routeName] = useContext(AppContext);

    useEffect(() => {
        const KEY = '@Account';
        let account;
        getObjectData(KEY)
            .then(res => account = res);

        setTimeout(() => {
            if (account === null) {
                navigation.navigate(routeName.login, {
                    prevScreen: routeName.splash
                });
            } else {
                const params = new URLSearchParams();
                params.append('Google', 0);
                params.append('EmailUser', account.email);
                params.append('PassUser', account.password);

                login(params)
                    .then(({data}) => {   
                        if (data.length === 1) 
                            alert(data[0].Message);
                        else 
                            navigation.navigate(routeName.bottomNavigation, {
                                prevScreen: routeName.splash
                            });
                    })
                    .catch(err => alert(`ERROR: ${err}`));
            }
        }, 2000);
    });

    return (
        <Container>
            <Logo
                source={Icon}
            />
        </Container>
    );
};

export default Splash;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.Image`
    width: 200px;
    height: 200px;
`;