import React, {useEffect} from 'react';
import { Container } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Text, TouchableOpacity, BackHandler } from 'react-native';

export default ({navigation}) => {

    function handleBackButtonClick() {
        if (navigation != undefined)
            navigation.goBack();
        return true;
    }
    
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
        };
    }, []);

    return (
        <Container>
            <TouchableOpacity onPress={() => handleBackButtonClick()}>
                <Text>
                    <FontAwesomeIcon icon={faArrowLeft} size={20}/>
                </Text>
            </TouchableOpacity>
        </Container>
    )
}
