import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/toWatchMoreItems/header';
import Content from '../components/toWatchMoreItems/content';

const WatchMoreItems = ({navigation, route}) => {
    const title = route?.params?.title || 'Title';
    const itemName = route?.params?.itemName || 'Featured';

    return (
        <Container>
            <Header 
                navigation={navigation}
                title={title}
            />
            <Content
                itemName={itemName}
                navigation={navigation}
            />
        </Container>
    );
};

export default WatchMoreItems;

export const Container = styled.View`
    flex: 1;
`;