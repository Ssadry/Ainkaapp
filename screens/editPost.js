import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/toEditPost/header';
import Content from '../components/toEditPost/content';
import defaultColors from '../assets/colors/defaultColors.json';

const EditPost = ({navigation, route}) => {
    const textbutton = route?.params?.textbutton ?? 'PUBLICAR';
    const isNeed = route?.params?.isNeed ?? true;
    return (
        <Container>
            <Header
                navigation={navigation}
            />
            <Content
                isNeed={isNeed}
                textbutton={textbutton}
            />
        </Container>
    )
}

export default EditPost;

const Container = styled.View`
    flex: 1;
    background-color: ${defaultColors.GrisPerla};
`;