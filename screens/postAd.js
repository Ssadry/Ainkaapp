import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/toPostAd/header';
import Content from '../components/toPostAd/content';
import defaultColors from '../assets/colors/defaultColors.json';

const PostAd = ({navigation}) => {
    return (
        <Container>
            <Header
                navigation={navigation}
            />
            <Content
                navigation={navigation}
            />
        </Container>
    )
}

export default PostAd;

export const Container = styled.View`
    flex: 1;
    background-color: ${defaultColors.GrisPerla};
`;