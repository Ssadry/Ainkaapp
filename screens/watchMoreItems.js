import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/toWatchMoreItems/header';
import Content from '../components/toWatchMoreItems/content';

export default ({navigation, route}) => {
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
    )
}

export const Container = styled.View`
    flex: 1;
`;