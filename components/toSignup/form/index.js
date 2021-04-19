import React, {useState} from 'react';
import {Container} from './styled';
import Input from './input';
import Password from './password';
import CheckBox from './checkBox';
import Button from './button';

export default () => {
    const [name, setName] = useState('');
    const [nacionality, setNacionality] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [passwordIsVisible, setPasswordIsVisible] = useState(false);
    const [confirmPasswordIsVisible, setConfirmPasswordIsVisible] = useState(false);

    const [isSelected, setSelection] = useState(false);

    const canContinue = () => {
        if (!name.trim()) return false;
        else if (!nacionality.trim()) return false;
        else if (!phone.trim()) return false;
        else if (!mail.trim()) return false;
        else if (!password.trim()) return false;
        else if (!confirmPassword.trim()) return false;
        else if (!isSelected) return false;

        alert('Ya podés pasar, boludo.');
        return true;
    }

    return (
        <Container>
            <Input 
                placeholder='Nombre y apellidos' 
                text={name} 
                setText={setName}
            />
            <Input 
                placeholder='Nacionalidad' 
                text={nacionality} 
                setText={setNacionality}
            />
            <Input 
                placeholder='Teléfono' 
                text={phone} 
                setText={setPhone}
            />
            <Input 
                placeholder='Correo electrónico' 
                text={mail} 
                setText={setMail}
            />
            <Password 
                placeholder='Contraseña' 
                text={password} 
                setText={setPassword} 
                isVisible={passwordIsVisible} 
                setVisible={setPasswordIsVisible}
            />
            <Password 
                placeholder='Repite la contraseña' 
                text={confirmPassword} 
                setText={setConfirmPassword} 
                isVisible={confirmPasswordIsVisible} 
                setVisible={setConfirmPasswordIsVisible}
            />
            <CheckBox 
                isSelected={isSelected} 
                setSelection={setSelection}
            />
            <Button click={canContinue}/>
        </Container>
    )
}