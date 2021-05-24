import React from 'react';
import {
    Container,
    LogoContainer,
    Logo,
    MyForm
} from './styled';
import Icon from '../../../assets/icon.png';
import Input from './form/input';

export default Form = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <Container>
            <LogoContainer>
                <Logo source={Icon}/>
            </LogoContainer>
            <MyForm>
                <Input 
                    title={'Correo electrónico'}
                    placerHolder={'Correo electrónico...'}
                    onChange={setEmail}
                    value={email}
                />
                <Input 
                    title={'Contraseña'}
                    placerHolder={'Contraseña...'}
                    onChange={setPassword}
                    value={email}
                />
            </MyForm>
        </Container>
    )
}