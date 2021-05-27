import React from 'react';
import {Container, CheckContainer} from './styled';
import Input from '../../form/input';
import Check from '../../form/check';
import {Dimensions} from 'react-native';

const inputWidth = Math.round(Dimensions.get('screen').width * 0.8);

export default Content = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [open, setOpen] = React.useState(false);

    return (
        <Container>
            <Input 
                width={inputWidth}
                placeHolder={'Correo electrónico *'}
                setValue={setEmail}
                value={email}
                canTextHide={false}
            />
            <Input 
                width={inputWidth}
                placeHolder={'Contraseña *'}
                setValue={setPassword}
                value={password}
                canTextHide={true}
            />
            <CheckContainer>
                <Check 
                    width={inputWidth}
                    text={'Mantener sesión abierta'}
                    setValue={setOpen}
                    value={open}
                />
            </CheckContainer>
        </Container>
    )
}