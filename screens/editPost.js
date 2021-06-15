import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/toEditPost/header';
import Content from '../components/toEditPost/content';

const EditPost = ({navigation, route}) => {
    const category = route?.params?.category ?? 'Category';
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

export default EditPost;

const Container = styled.View`
    flex: 1;
    background-color: white;
`;