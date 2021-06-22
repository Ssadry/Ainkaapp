import React, {useEffect} from 'react';
import { Container } from './styled';
import { LeftArrowIcon } from '../../assets/svg/icon';
import { Text, TouchableOpacity, BackHandler } from 'react-native';
import defaultColors from '../../assets/colors/defaultColors.json';

const HARDWARE_BACK_PRESS = 'hardwareBackPress';

export default ({
    navigation
}) => {

    const handleBackButtonClick = _ => {
        if (navigation != null || navigation != undefined) {
            if (navigation.canGoBack()) {
                navigation.goBack();
                return true;
            }
        }
        alert('No mas pasao el navigation')
        return false;
    }
    
    useEffect(() => {
        BackHandler.addEventListener(HARDWARE_BACK_PRESS, handleBackButtonClick);
        return () => BackHandler.removeEventListener(HARDWARE_BACK_PRESS, handleBackButtonClick);
    }, []);

    return (
        <Container>
            <TouchableOpacity 
                onPress={handleBackButtonClick}
            >
                <Text>
                    <LeftArrowIcon
                        size={30}
                        color={defaultColors.Lila}
                    />
                </Text>
            </TouchableOpacity>
        </Container>
    );
};
