import React, {useEffect} from 'react';
import { Container } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Text, TouchableOpacity, BackHandler } from 'react-native';

export default ({navigation}) => {
    const HARDWARE_BACK_PRESS = React.useRef('hardwareBackPress');

    const handleBackButtonClick = _ => {
        console.log(navigation)
        navigation.goBack();
        return true;
    }
    
    useEffect(() => {
        BackHandler.addEventListener(HARDWARE_BACK_PRESS, handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener(HARDWARE_BACK_PRESS, handleBackButtonClick);
        };
    }, []);

    return (
        <Container>
            <TouchableOpacity onPress={handleBackButtonClick}>
                <Text>
                    <FontAwesomeIcon icon={faArrowLeft} size={20}/>
                </Text>
            </TouchableOpacity>
        </Container>
    )
}
