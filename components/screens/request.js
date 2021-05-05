import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import Header from '../toRequest/header';
import Content from '../toRequest/content';
import Buttons from '../toRequest/buttons';
import {Dimensions, BackHandler} from 'react-native';
import PopUp from '../popUp';

export default ({navigation}) => {
    const {width} = Dimensions.get('window');
    const [popUpIsVisible, setPopUpIsVisible] = useState(false);

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

    const userPromisesMe = () => {
        setPopUpIsVisible(false);
        handleBackButtonClick();
    }

    return (
        <Container>
            <Header navigation={navigation}/>
            <Buttons 
                width={width}
                navigation={navigation}
                setPopUpIsVisible={setPopUpIsVisible}
            />
            <Content/>
            <PopUp 
                isVisible={popUpIsVisible}
                setPopUpIsVisible={setPopUpIsVisible}
                userPromisesMe={userPromisesMe}
            />
        </Container>
    )
}

export const Container = styled.View`
    flex: 1;
`;