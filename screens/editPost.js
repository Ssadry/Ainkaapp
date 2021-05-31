import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/toEditPost/header';
import Content from '../components/toEditPost/content';

export default ({navigation, route}) => {
    const category = route.params.category;
    return (
        <Container>
            <Header
                navigation={navigation}
            />
            <Content
                category={category}
            />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    background-color: white;
`;