import React from 'react';
import {BackHandler} from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/toWatchMoreItems/header';
import Content from '../components/toWatchMoreItems/content';

const handler = () => {

}

const WatchMoreItems = ({navigation, route}) => {
    // BackHandler.addEventListener('hardwareBackPress', handler);
    // BackHandler.removeEventListener('hardwareBackPress', handler);

    const {title} = route.params;
    const {itemName} = route.params;

    return (
        <Container>
            <Header 
                navigation={navigation}
                title={title}
            />
            <Content
                itemName={itemName}
            />
        </Container>
    );
};

export default WatchMoreItems;

export const Container = styled.View`
    flex: 1;
`;